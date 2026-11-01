import mongoose, { model, Schema, Types, type HydratedDocument } from "mongoose";

export interface IShop {
  ownerId: Types.ObjectId;
  shopName: string;
  createdAt: Date;
}

const ShopSchema = new Schema<IShop>(
  {
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
  },
  { timestamps: true },
);

export const Shop = model<IShop>("Shop", ShopSchema);
export type ShopDocument = HydratedDocument<IShop>;
