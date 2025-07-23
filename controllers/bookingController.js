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

// Update booking
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.params.id, userId: req.user.id });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    const { eventName, date, location, guests, message } = req.body;
    if (eventName !== undefined) booking.eventName = eventName;
    if (date !== undefined) booking.date = date;
    if (location !== undefined) booking.location = location;
    if (guests !== undefined) booking.guests = guests;
    if (message !== undefined) booking.message = message;
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete booking
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};