import { AppError } from "../../shared/helpers/custom.error.js";
import { Member, Roles, type IMember } from "./member.model.js";
import bcrypt from "bcryptjs";

export class MemberService {
  // Add a new member
  static async AddMember(data: IMember) {
    // Check member is already present
    const isMemberExists = await Member.findOne({ email: data.email });

    if (isMemberExists) {
      throw new AppError("Member already exists in this email", 400);
    }

    const isValidRole = Object.values(Roles).includes(data.role as Roles);

    if (!isValidRole) {
      throw new AppError("Invalid role", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.passwordHash, salt);

    const member = await Member.create({
      ...data,
      passwordHash: hashedPassword,
      status: true,
    });

    return {
      memberId: member._id,
      shopId: member.shopId,
      email: member.email,
      phoneNumber: member.phoneNumber,
      address: member.address,
      city: member.city,
      role: member.role,
      status: member.status,
      joiningDate: member.joiningDate,
    };
  }
}
