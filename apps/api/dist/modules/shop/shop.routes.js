import express from "express";
import { asyncHandler } from "../../shared/helpers/async.handler.js";
import { ShopController } from "./shop.controller.js";
const shopRoutes = express.Router();
shopRoutes.post("/create", asyncHandler(ShopController.createShopController));
shopRoutes.patch("/update", asyncHandler(ShopController.updateShopController));
shopRoutes.delete("/delete", asyncHandler(ShopController.deleteShopController));
shopRoutes.get("/getDetails", asyncHandler(ShopController.getShopDetailesController));
export default shopRoutes;
//# sourceMappingURL=shop.routes.js.map