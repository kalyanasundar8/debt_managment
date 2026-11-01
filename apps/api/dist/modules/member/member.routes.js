import express from "express";
import { MembersController } from "./member.controller.js";
import { asyncHandler } from "../../shared/helpers/async.handler.js";
import { AuthMiddleware } from "../../shared/middlewares/AuthMiddleware.js";
const memberRoutes = express.Router();
memberRoutes.post("/:shopId/members", AuthMiddleware, asyncHandler(MembersController.addMember));
export default memberRoutes;
//# sourceMappingURL=member.routes.js.map