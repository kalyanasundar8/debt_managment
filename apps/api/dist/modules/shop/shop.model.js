import mongoose, { model, Schema, Types } from "mongoose";
const ShopSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    shopName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
export const Shop = model("Shop", ShopSchema);
//# sourceMappingURL=shop.model.js.map