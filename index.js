require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const path = require("path");
const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("./db/models/user");

app.use(express.static(path.join(__dirname, "client/build")));

function callbackUrl(provider) {
  if (app.get("env") === "production") {
    return `https://vidnote.herokuapp.com/api/auth/${provider}/return`;
  } else if (app.get("env") === "development") {
    if (provider === "twitter") {
      return `http://127.0.0.1:5000/api/auth/${provider}/return`;
    } else if (provider === "facebook") {
      return `http://localhost:5000/api/auth/${provider}/return`;
    }
  }
}

function generateOrFindUser(accessToken, refreshToken, profile, done) {
  if (profile.emails) {
    User.findOneAndUpdate(
      { email: profile.emails[0].value },
      {
        name: profile.displayName || profile.username,
        email: profile.emails[0].value,
        photo: profile.photos[0].value
      },
      { upsert: true, new: true },
      done
    );
  } else {
    const emailError = new Error("Your email privacy settings prevent you from logging in.");
    done(emailError, null);
  }
}

// Configure Twitter Strategy
passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
  callbackURL: callbackUrl("twitter")
}, generateOrFindUser));

// Configure Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: callbackUrl("facebook"),
  profileFields: ["id", "displayName", "photos", "email"]
}, generateOrFindUser));

passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser((userId, done) => User.findById(userId, done));

// Require all routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const videoRoutes = require("./routes/video");

app.use(bodyParser.json());

// Set port to listen on
const port = process.env.PORT || 5000;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Connect to the database
mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/vidnote");

const db = mongoose.connection;

// Use sessions for tracking logins
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: db })
}));

app.use(passport.initialize());

// Restore session
app.use(passport.session());

// Handle database connection error
db.on("error", err => console.error(`DB Connection Error: ${err}`));

// On database connection
db.once("open", () => console.log("DB Connection Successful"));

// Use routes
app.use(authRoutes);
app.use(userRoutes);
app.use(videoRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Not Found (404) Route
app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// Listen on the set port
app.listen(port, () => console.log(`The app is listening on port: ${port}`));

module.exports = app;
