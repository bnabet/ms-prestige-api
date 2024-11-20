import express from "express";
import cors from "cors";

import apiRoutes from "./routes/apiRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

/** Middlewares */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Configuration de CORS */
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://bnabet.github.io",
    "https://ms-prestige-api.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("It works !"));

/** Routes */
app.use("/api", apiRoutes);

/** Middleware de gestion des erreurs */
app.use(errorHandler);

export default app;
