require("dotenv").config();

const express = require("express");
const app = express();
const authRoutes = require("./routers/auth");

const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));