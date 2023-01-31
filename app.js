require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const app = express();
const userRouter = require("./routes/userRoutes")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDB();

app.get("/", userRouter);

module.exports = app;