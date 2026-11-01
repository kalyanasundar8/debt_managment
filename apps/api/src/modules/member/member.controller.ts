import type { Request, Response } from "express";
import { MemberService } from "./member.service.js";

export class MembersController {
  // Add member
  static async AddMember(req: Request, res: Response): Promise<void> {
    const data = req.body;
    const member = await MemberService.AddMember(data);
    res.status(201).json({
      success: true,
      message: "Member addedd successfully",
      member,
    });
  }
}
