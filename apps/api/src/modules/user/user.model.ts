import mongoose, { Schema, type HydratedDocument } from "mongoose";

export interface IUser {
  userName: String;
  email: String;
  phoneNumber: String;
  passwordHash: String;
  status: boolean;
  address: String;
  city: String;
}

const UserSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

UserSchema.index({ email: 1 }, { unique: true });

export const user = mongoose.model<IUser>("User", UserSchema);
export type UserDocument = HydratedDocument<IUser>;
