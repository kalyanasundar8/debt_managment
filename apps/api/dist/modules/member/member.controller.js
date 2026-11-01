import { AppError } from "../../shared/helpers/custom.error.js";
import { isRole } from "./member.model.js";
import { MemberService } from "./member.service.js";
export class MembersController {
    // Add member
    static async addMember(req, res) {
        const userId = req.user?.id;
        console.log("USER ID: ", userId);
        if (!userId) {
            throw new AppError("Authentication required", 401);
        }
        const body = req.body;
        if (typeof body !== "object" || body === null) {
            throw new AppError("Request body must be an object", 400);
        }
        const { email, role } = body;
        if (typeof email !== "string" || email.trim().length === 0) {
            throw new AppError("A valid email is required", 400);
        }
        if (!isRole(role)) {
            throw new AppError("Invalid role", 400);
        }
        const shopId = req.params.shopId;
        console.log("SHOP ID: ", shopId);
        if (typeof shopId !== "string" || !shopId) {
            throw new AppError("Shop ID is required", 400);
        }
        const member = await MemberService.addMember({ email, role }, shopId, userId);
        res.status(201).json({
            success: true,
            message: "Member added successfully",
            member,
        });
    }
}
//# sourceMappingURL=member.controller.js.map