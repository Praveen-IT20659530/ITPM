const express = require("express");
const router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

router.get("/", async (req, res) => {
  const user = await User.find();
  res.status(200).json({ message: "success", data: user });
});


module.exports = router;
