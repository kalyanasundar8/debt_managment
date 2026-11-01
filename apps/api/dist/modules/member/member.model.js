import mongoose, { Schema, Types } from "mongoose";
export var Roles;
(function (Roles) {
    Roles["manager"] = "MANAGER";
    Roles["cashier"] = "CASHIER";
    Roles["employee"] = "EMPLOYEE";
})(Roles || (Roles = {}));
const MemberSchema = new Schema({
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
}, { timestamps: true });
MemberSchema.index({ userId: 1, shopId: 1 }, { unique: true });
export const Member = mongoose.model("Member", MemberSchema);
export const isRole = (value) => Object.values(Roles).some((role) => role === value);
//# sourceMappingURL=member.model.js.map