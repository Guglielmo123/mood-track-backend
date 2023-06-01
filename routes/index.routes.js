const express = require("express");
const router = express.Router();
const Mood = require('../models/Mood.model')


router.post("/create-mood", async (req, res, next) => {
const {user, mood, comment } = req.body;
try {
  let response = await Mood.create({user, mood, comment, moodSound: []})
  res.json(response);

} catch (error) {
  res.json(error);
}
});

module.exports = router;
