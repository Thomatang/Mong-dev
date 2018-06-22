const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  googleID: String,
  facebookID: String,
  name: String,
  lastUsed: Date
});


mongoose.model('users', userSchema);
