import { User } from "../modules/user/user.model.ts";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {};
