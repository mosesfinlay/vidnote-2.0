const express = require("express");
const router = express.Router();

// Required Models
const User = require("../db/models/user");

// GET /api/user/account
router.get("/api/user/account", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to view this page.", 
        status: 403 
      }
    });
  }
  
  User.findById(req.user._id)
    .exec((err, user) => {
      if (err) {
        res.json({ error: err });
        return next(err);
      } else {
        res.json({ 
          account: {
            id: req.user._id,
            name: user.name,
            email: user.email,
            photo: user.photo,
          },
          status: 200
        });
      }
    });
});

module.exports = router;
