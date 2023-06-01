const { Schema, model } = require("mongoose");

const moodSoundSchema = new Schema({
  mood: {
    type: String,
    enum: ['Happy', 'Sad', 'Stressed', 'Frustrated', 'Anxious', 'Lonely']
  },
  soundUrl: {
    type: String
  }
});

const MoodSound = model("MoodSound", moodSoundSchema);

module.exports = MoodSound;