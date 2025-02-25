const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/mern";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("🔥 MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("🔥 Backend работает!");
});

app.listen(PORT, () => console.log(`🔥 Сервер запущен на порту ${PORT}`));