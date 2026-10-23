import { ShopService } from "./shop.service.js";
export class ShopController {
    // Create shop controller
    static async createShopController(req, res) {
        const data = req.body;
        const result = await ShopService.createShop(data);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    // Update shop controller
    static async updateShopController() { }
    // Delete shop controller
    static async deleteShopController() { }
    // Get shop detailes controller
    static async getShopDetailesController() { }
}
//# sourceMappingURL=shop.controller.js.map