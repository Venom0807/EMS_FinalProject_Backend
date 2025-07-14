import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  eventName: String,
  date: String,
  location: String,
  guests: Number,
  message: String,
});

export default mongoose.model("Booking", bookingSchema);
