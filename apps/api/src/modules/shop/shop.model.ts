import mongoose, {
  model,
  Schema,
  Types,
  type HydratedDocument,
} from "mongoose";

export interface IShop {
  ownerId: Types.ObjectId;
  shopName: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

const ShopSchema = new Schema<IShop>(
  {
    ownerId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
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
