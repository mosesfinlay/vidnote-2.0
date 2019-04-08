const express = require("express");
const router = express.Router();
const https = require("https");

// Required Models
const Video = require("../db/models/video");

// GET /api/youtube/api/:videoId
router.get("/api/youtube/api/:videoId", (req, res, next) => {
  const apiURL = `https://www.googleapis.com/youtube/v3/videos?id=${req.params.videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet,statistics&fields=items(id,snippet,statistics)`;
  let body = "";

  https.get(apiURL, req => {
    req.on("data", data => body += data);

    req.on("end", () => {
      const json = JSON.parse(body);
      
      res.json({ data: json });
    });
  });
});

// GET /api/user/videos/all
router.get("/api/user/videos/all", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to view this page.", 
        status: 403 
      }
    });
  }

  Video.find({ user: req.user._id })
    .exec((err, notes) => {
      if (err) {
        res.json({ error: err });
        return next(err);
      } else {
        res.json({ notes, status: 200 });
      }
    });
});

// GET /api/user/videos/:videoId
router.get("/api/user/videos/:videoId", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to view this page.", 
        status: 403 
      }
    });
  }

  Video.findById(req.params.videoId)
    .exec((err, video) => {
      if (err) {
        res.json({ error: err });
        return next(err);
      } else {
        res.json({ video, status: 200 });
      }
    });
});

// PUT /api/user/videos/:videoId/update
router.put("/api/user/videos/:videoId/update", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to perform this action.", 
        status: 403 
      }
    });
  }

  const {
    notes
  } = req.body;
  
  if (notes) {
    // Updates the video
    Video.findByIdAndUpdate(req.params.videoId, { notes }, {}, err => {
      if (err) {
        res.json({ error: err });
        return next(err);
      } else {
        res.json({
          success: true 
        });
      }
    });
  } else {
    res.json({
      error: { message: "All fields are required. Please try again.", status: 400 }
    });
  }
});

// POST /api/user/videos/new
router.post("/api/user/videos/new", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to perform this action.", 
        status: 403 
      }
    });
  }

  const {
    user,
    title,
    duration,
    url
  } = req.body;
  
  if (user && title && duration && url) {
    // Create a video
    Video.create(req.body, (err, video) => {
      if (err) {
        return res.json({ error: err });
      } else {
        res.json({ 
          video,
          success: true 
        });
      }
    });
  } else {
    res.json({
      error: { message: "All fields are required. Please try again.", status: 400 }
    });
  }
});

// DELETE /api/user/videos/:videoId/delete
router.delete("/api/user/videos/:videoId/delete", (req, res, next) => {
  if (!req.user) {
    return res.json({ 
      error: { 
        message: "You are not authorized to perform this action.", 
        status: 403 
      }
    });
  }
  
  // Delete the video
  Video.findByIdAndDelete(req.params.videoId, err => {
    if (err) {
      res.json({ error: err });
      return next(err);
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router;
