import mongoose, { Types, type HydratedDocument } from "mongoose";
export interface IShop {
    ownerId: Types.ObjectId;
    shopName: string;
    createdAt: Date;
}
export declare const Shop: mongoose.Model<IShop, {}, {}, {}, mongoose.Document<unknown, {}, IShop, {}, mongoose.DefaultSchemaOptions> & IShop & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IShop & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export type ShopDocument = HydratedDocument<IShop>;
//# sourceMappingURL=shop.model.d.ts.map