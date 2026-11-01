import express from "express";
import { MembersController } from "./member.controller.js";
import { asyncHandler } from "../../shared/helpers/async.handler.js";
import { AuthMiddleware } from "../../shared/middlewares/AuthMiddleware.js";

const memberRoutes = express.Router();

memberRoutes.post(
  "/create",
  AuthMiddleware,
  asyncHandler(MembersController.AddMember),
);

export default memberRoutes;
