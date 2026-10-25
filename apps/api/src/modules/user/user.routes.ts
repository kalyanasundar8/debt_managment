import express from "express";
import { asyncHandler } from "../../shared/helpers/async.handler.js";
import { UserController } from "./user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/create", asyncHandler(UserController.createUser));

export default userRoutes;
