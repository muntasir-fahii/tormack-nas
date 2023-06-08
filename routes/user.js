const express = require("express");

const { signupUser, loginUser } = require("../controllers/user");

//router
const router = express.Router();

// login route
router.post("/login", loginUser);

// signup user
router.post("/signup", signupUser);

module.exports = router;
