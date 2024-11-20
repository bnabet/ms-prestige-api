import express from "express";
import carRoutes from "./carRoutes.js";
// Importez d'autres routes ici, par exemple : import userRoutes from "./userRoutes.js";

const router = express.Router();

// Routes
router.use("/cars", carRoutes);
// Ajoutez d'autres routes ici, par exemple : router.use("/users", userRoutes);

export default router;
