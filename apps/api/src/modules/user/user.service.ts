import bcrypt from "bcryptjs";
import { AppError } from "../../shared/helpers/custom.error.js";
import { User, type IUser } from "./user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../shared/helpers/generate.token.js";

export class UserService {
  // Create new user
  static async createUser(userData: IUser) {
    // Check the email format
    // Check user exists in the collection
    const isUserExists = await User.findOne({ email: userData.email });
    // If exists: throw error
    if (isUserExists) {
      throw new AppError("User already exists in this email", 400);
    }
    // Check security issues in password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.passwordHash, salt);
    // Not exists: create document
    const user = await User.create({
      ...userData,
      passwordHash: hashedPassword,
    });
    // Generate access & refresh tokens
    const access = generateAccessToken(user._id.toString());
    const refresh = generateRefreshToken(user._id.toString());
    // Return user with token
    return {
      id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      city: user.city,
      accessToken: access,
      refreshToken: refresh,
    };
  }

  // Update user
  static async updateUser() {}

  // Delete user
  static async deleteUser() {}

  // Get user profile
  static async getUserProfile() {}
}
