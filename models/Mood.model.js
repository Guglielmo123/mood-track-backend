const { Schema, model } = require("mongoose");

const moodSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  mood: [{
    type: String,
    enum: ['Happy','Excited','Optimistic','Serene','Relaxed','Bored', 'Apathetic','Lonely','Sad','Frustrated','Anxious','Irritated','Livid','Fed Up']
  }],
  comment: {
    type: String
  },
  moodSound: [{
    type: Schema.Types.ObjectId,
    ref: 'MoodSound'
  }],
  date: {type: Date,
default: Date.now()},
  
});

const Mood = model("Mood", moodSchema);

module.exports = Mood;
