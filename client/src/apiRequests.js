import axios from "axios";

/********** 
  User
**********/

// Get user account
export const getUserAccount = callback => 
  axios.get("/api/user/account").then(callback);

// Log a user out
export const getUserLogout = callback => 
  axios.get("/api/auth/logout").then(callback);

/********** 
  Videos
**********/

// Get all videos
export const getAllVideos = callback => 
  axios.get("/api/user/videos/all").then(callback);

// Get a specific video
export const getOneVideo = (videoId, callback) => 
  axios.get(`/api/user/videos/${videoId}`).then(callback);

// Create a new video
export const createVideo = (body, callback) => 
  axios.post("/api/user/videos/new", body).then(callback);

// Update a specific video
export const updateVideo = (videoId, body, callback) => 
  axios.put(`/api/user/videos/${videoId}/update`, body).then(callback);

// Delete a specific video
export const deleteVideo = (videoId, callback) => 
  axios.delete(`/api/user/videos/${videoId}/delete`).then(callback);

// Get info on a specific video from YouTube's Data API
export const getVideoInfo = (videoId, callback) => 
  axios.get(`/api/youtube/api/${videoId}`).then(callback);
    