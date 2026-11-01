import { Roles } from "./member.model.js";
import { Types } from "mongoose";
export declare class MemberService {
    static addMember(data: {
        email: string;
        role: Roles;
    }, shopId: string, actingUserId: string): Promise<{
        memberId: Types.ObjectId;
        userId: Types.ObjectId;
        shopId: Types.ObjectId;
        userName: string;
        email: string;
        role: Roles;
        status: boolean;
        joiningDate: Date;
    }>;
}
//# sourceMappingURL=member.service.d.ts.map