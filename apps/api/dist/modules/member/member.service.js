import { AppError } from "../../shared/helpers/custom.error.js";
import { Member, Roles, isRole } from "./member.model.js";
import { Shop } from "../shop/shop.model.js";
import { User } from "../user/user.model.js";
import { Types } from "mongoose";
export class MemberService {
    // Add a new member
    static async addMember(data, shopId, actingUserId) {
        if (!Types.ObjectId.isValid(shopId) ||
            !Types.ObjectId.isValid(actingUserId)) {
            throw new AppError("Invalid shop or user ID", 400);
        }
        if (!isRole(data.role)) {
            throw new AppError("Invalid role", 400);
        }
        const shopObjectId = new Types.ObjectId(shopId);
        const actingUserObjectId = new Types.ObjectId(actingUserId);
        const shop = await Shop.findById(shopObjectId).select("ownerId");
        if (!shop) {
            throw new AppError("Shop not found", 404);
        }
        const isOwner = shop.ownerId.equals(actingUserObjectId);
        if (!isOwner) {
            const actingMembership = await Member.findOne({
                userId: actingUserObjectId,
                shopId: shopObjectId,
                role: Roles.manager,
                status: true,
            });
            if (!actingMembership) {
                throw new AppError("You are not allowed to manage this shop's members", 403);
            }
            if (data.role === Roles.manager) {
                throw new AppError("Only the shop owner can assign the manager role", 403);
            }
        }
        const email = data.email.trim().toLowerCase();
        const user = await User.findOne({ email });
        if (!user) {
            throw new AppError("The member must create a user account first", 404);
        }
        if (shop.ownerId.equals(user._id)) {
            throw new AppError("The shop owner does not need a member record", 400);
        }
        const existingMembership = await Member.findOne({
            userId: user._id,
            shopId: shopObjectId,
        });
        if (existingMembership) {
            throw new AppError("This user is already a member of the shop", 409);
        }
        const member = await Member.create({
            userId: user._id,
            shopId: shopObjectId,
            role: data.role,
        });
        return {
            memberId: member._id,
            userId: member.userId,
            shopId: member.shopId,
            userName: user.userName,
            email: user.email,
            role: member.role,
            status: member.status,
            joiningDate: member.joiningDate,
        };
    }
}
//# sourceMappingURL=member.service.js.map