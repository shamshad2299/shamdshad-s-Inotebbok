const express = require("express");
var fetchUser = require("../MiddleWare/fetchUser");
const userSignUp = require("../controller/signup");
const userSignIn = require("../controller/signin");
const getUserDetails = require("../controller/getUser");

const router = express.Router();

router.post("/createuser" , userSignUp)

router.post( "/login", userSignIn)

router.post("/getuser",fetchUser, getUserDetails)

module.exports = router;