import mongoose, { type HydratedDocument } from "mongoose";
export interface IShop {
    shopName: string;
    email: string;
    hashedPassword: string;
    createdAt: Date;
}
export declare const Shop: mongoose.Model<IShop, {}, {}, {}, mongoose.Document<unknown, {}, IShop, {}, mongoose.DefaultSchemaOptions> & IShop & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IShop & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type ShopDocument = HydratedDocument<IShop>;
//# sourceMappingURL=shop.model.d.ts.map