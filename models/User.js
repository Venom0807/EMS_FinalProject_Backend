import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  picture: String, 
});

export default mongoose.model('User', userSchema);
