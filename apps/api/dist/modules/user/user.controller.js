import { UserService } from "./user.service.js";
export class UserController {
    static async createUser(req, res, next) {
        const data = req.body;
        const result = await UserService.createUser(data);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    static async signInUser(req, res) {
        const data = req.body;
        const result = await UserService.signInUser(data);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
}
//# sourceMappingURL=user.controller.js.map