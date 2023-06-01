const { Schema, model } = require("mongoose");

const moodSoundSchema = new Schema({
  mood: {
    type: String,
    enum: ['Happy','Excited','Optimistic','Serene','Relaxed','Bored', 'Apathetic','Lonely','Sad','Frustrated','Anxious','Irritated','Livid','Fed Up']
  },
  soundUrl: {
    type: Array
  }
});

const MoodSound = model("MoodSound", moodSoundSchema);

module.exports = MoodSound;