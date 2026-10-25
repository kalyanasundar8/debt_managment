import type { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service.js";

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const result = await UserService.createUser(data);
    res.status(201).json({
      success: true,
      data: result,
    });
  }
}
