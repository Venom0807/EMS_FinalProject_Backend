import express from "express";
import { createBooking, getMyBookings, updateBooking, deleteBooking } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/my", authMiddleware, getMyBookings);
router.post("/create", authMiddleware, createBooking);
router.put("/update/:id", authMiddleware, updateBooking);
router.delete("/delete/:id", authMiddleware, deleteBooking);

export default router;
