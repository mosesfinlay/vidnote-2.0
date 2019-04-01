import axios from "axios";

// Get user account
export const getUserAccount = callback => 
  axios.get("/api/user/account").then(callback);

// Log a user in
export const postUserLogin = (body, callback) => 
  axios.post("/api/user/login", body).then(callback);

// Log a user out
export const getUserLogout = callback => 
  axios.get("/api/user/logout").then(callback);

// Sign a user up
export const postUserSignup = (body, callback) => 
  axios.post("/api/user/signup", body).then(callback);