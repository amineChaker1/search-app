import Booking from "../models/booking.js";

export const addNewBooking = async (req, res) => {
  const newBooking = req.body;
  try {
    const booking = await Booking.create(newBooking);
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
