import { Types } from "mongoose";
export declare class ShopService {
    static createShop(shopName: string, userId: string): Promise<{
        ownerId: Types.ObjectId;
        shopId: Types.ObjectId;
        name: string;
        createdAt: Date;
    }>;
    static updateShop(): Promise<void>;
    static deleteShop(): Promise<void>;
    static getShopDetails(): Promise<void>;
}
//# sourceMappingURL=shop.service.d.ts.map