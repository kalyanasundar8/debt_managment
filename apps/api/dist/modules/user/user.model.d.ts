import mongoose, { type HydratedDocument } from "mongoose";
export interface IUser {
    userName: string;
    email: string;
    phoneNumber: string;
    passwordHash: string;
    status: boolean;
    address: string;
    city: string;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser, {}, mongoose.DefaultSchemaOptions> & IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IUser & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type UserDocument = HydratedDocument<IUser>;
//# sourceMappingURL=user.model.d.ts.map