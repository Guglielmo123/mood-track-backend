const { Schema, model } = require("mongoose");

const moodSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  mood: [{
    type: String,
    enum: ['Happy', 'Sad', 'Stressed', 'Frustrated', 'Anxious', 'Lonely']
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
