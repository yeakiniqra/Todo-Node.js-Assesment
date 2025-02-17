const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
