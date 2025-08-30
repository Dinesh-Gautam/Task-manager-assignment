const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const mainRouter = require("./routes/mainRouter");
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.APP_URL || "http://localhost:5173",
    credentials: true,
  })
);
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(errorHandler);
module.exports = app;
