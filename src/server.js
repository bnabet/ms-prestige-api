import mongoose from "mongoose";
import app from "./app.js";
import { config } from "./config.js";

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.log("Connected to MongoDB");

    const PORT = config.server.port;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  });
