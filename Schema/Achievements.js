const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AchievementSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
})

const Achievement = mongoose.model("achievements", AchievementSchema);

module.exports = Achievement;