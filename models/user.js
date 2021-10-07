const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  userID: String,
  username: String,
  game: Array,
})

module.exports = mongoose.model("User", userSchema);