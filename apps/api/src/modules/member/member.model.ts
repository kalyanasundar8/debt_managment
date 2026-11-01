import mongoose, { Schema, Types, type HydratedDocument } from "mongoose";

export enum Roles {
  manager = "MANAGER",
  cashier = "CASHIER",
  employee = "EMPLOYEE",
}

export interface IMember {
  shopId: Types.ObjectId;
  memberName: string;
  email: string;
  phoneNumber: string;
  passwordHash: string;
  address: string;
  city: string;
  role: Roles;
  status: boolean;
  joiningDate: Date;
}

const MemberSchema = new Schema<IMember>(
  {
    memberName: {
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
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

MemberSchema.index({ email: 1, shopId: 1 }, { unique: true });

export const Member = mongoose.model<IMember>("Member", MemberSchema);
export type MemberDocument = HydratedDocument<IMember>;
