const express = require("express");
const router = express.Router();
const passport = require("passport");

// GET /api/auth/twitter
router.get("/api/auth/twitter", passport.authenticate("twitter"));

// GET /api/auth/twitter/return
router.get("/api/auth/twitter/return", 
  passport.authenticate("twitter", { failureRedirect: "/" }), 
  (req, res) => res.redirect("/account")
);

// GET /api/auth/facebook
router.get("/api/auth/facebook", passport.authenticate("facebook", { scope: ["email"] }));

// GET /api/auth/twitter/return
router.get("/api/auth/facebook/return", 
  passport.authenticate("facebook", { failureRedirect: "/" }), 
  (req, res) => res.redirect("/account")
);

// GET /api/auth/logout
router.get("/api/auth/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;