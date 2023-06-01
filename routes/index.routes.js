const express = require("express");
const router = express.Router();
const Mood = require('../models/Mood.model');
const { route } = require("./index.routes");

// post route to create a mood 
router.post("/create-mood", async (req, res, next) => {
const {user, mood, comment, date } = req.body;
try {
  let response = await Mood.create({user, mood, comment, moodSound: [], date})
  res.json(response);

} catch (error) {
  res.json(error);
}
});

module.exports = router;

// get route to get all moods submitted and show them in calendar 

router.get("/create-mood", async (req, res) =>{

  try {
    
    letAllMoods = await Mood.find();
    res.json(letAllMoods);


  } catch (error) {
    res.json(error);
  }

});

//// GET /api/projects/:projectId to display specific info of a Mood in a specific day 

router.get("/create-mood/:moodId", async (req, res)=>{

const moodId = req.params;

if(!mongoose.Types.ObjectId.isValid(moodId)){
  // status of 2xx is successful.
  // error with 4xx is client-side.
  // error with 5xx is server-side 
  res.status(400).json({message: 'Specified id is not valid'});
  return;
}

try {
  let foundMood = await Mood.findById(moodId)
        res.status(200).json(foundMood);

} catch (error) {
  res.json(error);
}

})
// UPDATE - my mood
router.put("/update-mood/:moodId", async (req, res) => {
  const moodId = req.params.moodId;
  const { mood, comment, date } = req.body;

  try {
    let updatedMood = await Mood.findByIdAndUpdate(
      moodId,
      { mood, comment, date },
      { new: true }
    );
    res.json(updatedMood);
  } catch (error) {
    res.json(error);
  }
});

// DELETE specific mood 
router.delete("/delete-mood/:moodId", async (req, res) => {
  const moodId = req.params.moodId;

  try {
    await Mood.findByIdAndDelete(moodId);
    res.json({ message: "Mood deleted successfully" });
  } catch (error) {
    res.json(error);
  }
});
