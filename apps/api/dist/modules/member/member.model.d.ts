import mongoose, { Types, type HydratedDocument } from "mongoose";
export declare enum Roles {
    manager = "MANAGER",
    cashier = "CASHIER",
    employee = "EMPLOYEE"
}
export interface IMember {
    userId: Types.ObjectId;
    shopId: Types.ObjectId;
    role: Roles;
    status: boolean;
    joiningDate: Date;
}
export declare const Member: mongoose.Model<IMember, {}, {}, {}, mongoose.Document<unknown, {}, IMember, {}, mongoose.DefaultSchemaOptions> & IMember & {
    _id: Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, IMember & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export type MemberDocument = HydratedDocument<IMember>;
export declare const isRole: (value: unknown) => value is Roles;
//# sourceMappingURL=member.model.d.ts.map