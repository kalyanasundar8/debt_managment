import type { Request, Response } from "express";
import { AppError } from "../../shared/helpers/custom.error.js";
import { ShopService } from "./shop.service.js";

export class ShopController {
  // Create shop controller
  static async createShopController(
    req: Request,
    res: Response,
  ): Promise<void> {
    const userId = req.user?.id;
    if (!userId) {
      throw new AppError("Authentication required", 401);
    }

    const body: unknown = req.body;
    if (typeof body !== "object" || body === null) {
      throw new AppError("Request body must be an object", 400);
    }

    const { shopName } = body as { shopName?: unknown };
    if (typeof shopName !== "string") {
      throw new AppError("Shop name is required", 400);
    }

    const result = await ShopService.createShop(shopName, userId);

    res.status(201).json({
      success: true,
      data: result,
    });
  }

  // Update shop controller
  static async updateShopController() {}

  // Delete shop controller
  static async deleteShopController() {}

  // Get shop detailes controller
  static async getShopDetailesController() {}
}
