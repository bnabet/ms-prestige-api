import express from "express";
import carController from "../controllers/car/carController.js";

const router = express.Router();

const { getCars, getCar, createCar, updateCar, deleteCar } = carController;

// Routes
router.get("/", getCars);
router.get("/:id", getCar);
router.post("/", createCar);
router.patch("/:id", updateCar);
router.delete("/:id", deleteCar);

export default router;
