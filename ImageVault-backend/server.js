require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const imageRoutes = require("./routes/imageRoutes");
const cors = require("cors");
const path = require("path");

const app = express();
connectDB();

app.use(cors({
    origin: "https://adeshmishra-imagevault.vercel.app",
    methods: ["GET", "POST", "DELETE"],
    credentials: true
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/images", imageRoutes);




app.get("/", (req, res) => {
    res.send("Welcome to ImageVault API");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});