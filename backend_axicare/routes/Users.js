"use strict";
import express from "express";
import { UserController } from "../controllers";

const { register } = UserController;

const userRouter = express.Router();

userRouter.post("/register", register);
export default userRouter;
