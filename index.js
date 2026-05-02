const express = require('express');
const fs = require('fs');
require("dotenv").config();

const { logReqRes } = require("./middlewares/index")
const userRouter = require('./routes/user');
const { connectMongoDB } = require("./connections");

const app = express();

// Connection
connectMongoDB(process.env.MONGO_URL);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/user", userRouter);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});