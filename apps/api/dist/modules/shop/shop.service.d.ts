import { type IShop } from "./shop.model.js";
export declare class ShopService {
    static createShop(shopData: IShop): Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string;
        email: string;
    }>;
    static updateShop(): Promise<void>;
    static deleteShop(): Promise<void>;
    static getShopDetails(): Promise<void>;
}
//# sourceMappingURL=shop.service.d.ts.map