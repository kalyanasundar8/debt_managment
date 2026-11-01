import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
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
}, { timestamps: true });
UserSchema.index({ email: 1 }, { unique: true });
export const User = mongoose.model("User", UserSchema);
//# sourceMappingURL=user.model.js.map