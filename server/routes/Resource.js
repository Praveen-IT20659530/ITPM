const express = require("express");
const router = express.Router();
const Resource = require("../model/Resource");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");

// router.get("/", async (req, res) => {
//   const resource = await Resource.find();
//   res.status(200).json({ message: "success", data: resource });
// });

router.get("/post", async (req, res) => {
  res.json(await Resource.find().sort({ createdAt: -1 }).limit(20));
});



module.exports = router;
