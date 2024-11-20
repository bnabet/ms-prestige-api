import mongoose from "mongoose";
import app from "../src/app.js";
import { config } from "../src/config.js";

let isConnected = false;

export default async (req, res) => {
  if (!isConnected) {
    try {
      await mongoose.connect(config.mongo.url);
      isConnected = true;
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB", error);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
  }

  return app(req, res);
};
