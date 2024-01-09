import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bookRouter from "./book/bookRoute.js";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./user/userRouter.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection made with MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
  const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", bookRouter);
app.use("/api/auth", userRouter);

app.get("/test", (req, res) => {
  res.send("Testing...");
});
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// const PORT = process.env.PORT || 3000;

app.listen(5000, () => {
  console.log("server running ");
});
