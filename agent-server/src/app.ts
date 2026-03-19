import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/chat.js";

// Import env variables
dotenv.config();
// Create the Express app instance.
const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
    })
)
// Automatically parse incoming json
app.use(express.json());
app.get("/health", (_req, res) => {
    res.json({ok: true, service: "agent-server"});
});
// Setup chat endpoint
app.use("/api/chat", route)

export default app;