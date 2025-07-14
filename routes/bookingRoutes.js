import express from "express";
import { createBooking, getMyBookings } from "../controllers/bookingController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/my", authMiddleware, getMyBookings);
router.post("/create", authMiddleware, createBooking);

export default router;
