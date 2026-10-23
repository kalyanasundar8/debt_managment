import mongoose, { model, Schema, type HydratedDocument } from "mongoose";

export interface IShop {
  shopName: string;
  email: string;
  hashedPassword: string;
  createdAt: Date;
}

const ShopSchema = new Schema<IShop>(
  {
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
  },
  { timestamps: true },
);

ShopSchema.index({ email: 1 }, { unique: true });

export const Shop = model<IShop>("Shop", ShopSchema);
export type ShopDocument = HydratedDocument<IShop>;
