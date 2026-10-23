import mongoose, { model, Schema } from "mongoose";
const ShopSchema = new Schema({
    shopName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
ShopSchema.index({ email: 1 }, { unique: true });
export const Shop = model("Shop", ShopSchema);
//# sourceMappingURL=shop.model.js.map