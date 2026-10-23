import bcrypt from "bcryptjs";
import { AppError } from "../../shared/helpers/custom.error.js";
import { Shop, type IShop } from "./shop.model.js";

export class ShopService {
  // Create new shop
  static async createShop(shopData: IShop) {
    // Check already the shop name exists
    const isShopExists = await Shop.findOne({ email: shopData.email });

    if (isShopExists) {
      throw new AppError("Already shop exist in this mail", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(shopData.hashedPassword, salt);

    const shop = await Shop.create({
      ...shopData,
      hashedPassword,
      createdAt: Date.now(),
    });

    return {
      id: shop._id,
      name: shop.shopName,
      email: shop.email,
      createdAt: shop.createdAt,
    };
  }

  // Update shop
  static async updateShop() {}

  // Delete shop
  static async deleteShop() {}

  // Get shop details by id
  static async getShopDetails() {}
}
