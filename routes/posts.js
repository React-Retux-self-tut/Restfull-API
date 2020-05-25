const express = require("express");
const router = express.Router();
const Post = require("../Models/Post");

router.get("/", (req, res) => {
  res.send("We are on posts");
});
router.get("/londons", (req, res) => {
  res.send("We are on Londons specific- post");
});


//this is when you download POSTMAN for testing

router.post('/', (req, res) =>{
    console.log(req.body);
});

module.exports = router;
