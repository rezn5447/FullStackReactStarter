const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});
// two args means loading something into it
mongoose.model('users', userSchema);
