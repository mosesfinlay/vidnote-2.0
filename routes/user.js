const express = require("express");
const router = express.Router();

// Required Models
const User = require("../db/models/user");

// GET /api/user/account
router.get("/api/user/account", (req, res, next) => {
  if (!req.session.userId) {
    return res.json({ 
      error: { 
        message: "You are not authorized to view this page.", 
        status: 403 
      }
    });
  }

  User.findById(req.session.userId)
    .exec((err, user) => {
      if (err) {
        res.json({ error: err });
        return next(err);
      } else {
        res.json({ 
          account: {
            name: user.name,
            email: user.email
          },
          status: 200
        });
      }
    });
});

// GET /api/user/logout
router.get("/api/user/logout", (req, res, next) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.json({ error: { message: "There was an error" } });
      } else {
        res.json({ success: true });
      }
    });
  }
});

// POST /api/user/login
router.post("/api/user/login", (req, res, next) => {
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, (err, user) => {
      if (err || !user) {
        res.json({ error: { message: "Wrong email or password", status: 401 } });
      } else {
        req.session.userId = user._id;
        res.json({ success: true });
      }
    });
  } else {
    res.json({
      error: { message: "Email and password are required.", status: 401 }
    });
  }
});

// POST /api/user/signup
router.post("/api/user/signup", (req, res, next) => {
  if (req.body.name && req.body.email && req.body.password && req.body.confirmPassword) {
    if (req.body.password === req.body.confirmPassword) {
      // Create a user
      User.create(req.body, (err, user) => {
        if (err) {
          res.json({ error: err });
          return next(err);
        } else {
          req.session.userId = user._id;
          res.json({ success: true });
        }
      });
    } else {
      res.json({
        error: { message: "Passwords do not match.", status: 400 }
      });
    }
  } else {
    res.json({
      error: { message: "All fields are required. Please try again.", status: 400 }
    });
  }
});

module.exports = router;
