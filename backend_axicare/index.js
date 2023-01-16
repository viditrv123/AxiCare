"use strict";
import * as dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { MongoConfig } from "./configs";
import { userRouter } from "./routes";

mongoose.set("strictQuery", false);

await mongoose.connect(
  `mongodb+srv://${MongoConfig.UserName}:${MongoConfig.Password}@cluster0.ueukd1b.mongodb.net/${MongoConfig.DbName}?retryWrites=true&w=majority`
);

const app = express();
app.use(express.json());
app.use(cors());

// const authRoutes=require("./routes/auth");
// const router = require('./routes/auth');

app.use("/application", userRouter);

const port = 8000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
