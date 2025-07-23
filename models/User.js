import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  picture: String, // optional for Google login
});

export default mongoose.model('User', userSchema);
