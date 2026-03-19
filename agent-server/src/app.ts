import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/chat.js";

// Import env variables
dotenv.config();
// Create the Express app instance.
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_ORIGIN,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (curl/Postman) and approved origins.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

// Automatically parse incoming json
app.use(express.json());
app.get("/health", (_req, res) => {
    res.json({ok: true, service: "agent-server"});
});
// Setup chat endpoint
app.use("/api/chat", route)

export default app;