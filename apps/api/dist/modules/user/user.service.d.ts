import { type IUser } from "./user.model.js";
export interface SignInData {
    email: string;
    passwordHash: string;
}
export declare class UserService {
    static createUser(userData: IUser): Promise<{
        id: import("mongoose").Types.ObjectId;
        userName: string;
        email: string;
        phoneNumber: string;
        address: string;
        city: string;
        accessToken: string;
        refreshToken: string;
    }>;
    static signInUser(data: SignInData): Promise<{
        id: import("mongoose").Types.ObjectId;
        userName: string;
        email: string;
        phoneNumber: string;
        address: string;
        city: string;
        accessToken: string;
        refreshToken: string;
    }>;
    static updateUser(): Promise<void>;
    static deleteUser(): Promise<void>;
    static getUserProfile(): Promise<void>;
}
//# sourceMappingURL=user.service.d.ts.map