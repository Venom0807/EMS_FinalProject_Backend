import Booking from "../models/Booking.js";

// Create booking
export const createBooking = async (req, res) => {
  try {
    const { eventName, eventDate, guests, location, message } = req.body;
    const booking = new Booking({
      userId: req.user.id,
      eventName,
      date: eventDate,
      location,
      guests,
      message,
    });
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error("Booking create error:", error);
    res.status(500).json({ message: "Server error while booking" });
  }
};

// Get bookings for current user
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};