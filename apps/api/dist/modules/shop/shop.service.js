import { AppError } from "../../shared/helpers/custom.error.js";
import { Shop } from "./shop.model.js";
import { Types } from "mongoose";
export class ShopService {
    // Create new shop
    static async createShop(shopName, userId) {
        const normalizedShopName = shopName.trim();
        if (!normalizedShopName) {
            throw new AppError("Shop name is required", 400);
        }
        if (!Types.ObjectId.isValid(userId)) {
            throw new AppError("Invalid owner ID", 400);
        }
        const shop = await Shop.create({
            shopName: normalizedShopName,
            ownerId: new Types.ObjectId(userId),
            createdAt: Date.now(),
        });
        return {
            ownerId: shop.ownerId,
            shopId: shop._id,
            name: shop.shopName,
            createdAt: shop.createdAt,
        };
    }
    // Update shop
    static async updateShop() { }
    // Delete shop
    static async deleteShop() { }
    // Get shop details by id
    static async getShopDetails() { }
}
//# sourceMappingURL=shop.service.js.map