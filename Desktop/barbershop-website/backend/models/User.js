const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false } // חשוב! תומך באדמין
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);

