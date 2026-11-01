import mongoose, { Schema, Types, type HydratedDocument } from "mongoose";

export enum Roles {
  manager = "MANAGER",
  cashier = "CASHIER",
  employee = "EMPLOYEE",
}

export interface IMember {
  userId: Types.ObjectId;
  shopId: Types.ObjectId;
  role: Roles;
  status: boolean;
  joiningDate: Date;
}

const MemberSchema = new Schema<IMember>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    shopId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Shop",
    },
    role: {
      type: String,
      enum: Roles,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
      required: true,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true },
);

MemberSchema.index({ userId: 1, shopId: 1 }, { unique: true });

export const Member = mongoose.model<IMember>("Member", MemberSchema);
export type MemberDocument = HydratedDocument<IMember>;

export const isRole = (value: unknown): value is Roles =>
  Object.values(Roles).some((role) => role === value);
