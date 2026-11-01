import type { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader?.match(/^Bearer\s+(.+)$/i)?.[1];

  if (!token) {
    return res.status(401).json({
      message: "Access Denied: No Token Provided!",
    });
  }

  try {
    const verifiedUser = JWT.verify(token, process.env.JWT_ACCESS_SECRET!);
    if (
      typeof verifiedUser === "string" ||
      typeof verifiedUser.id !== "string"
    ) {
      return res
        .status(403)
        .json({ message: "The token is invalid or Expired!" });
    }

    req.user = { id: verifiedUser.id };
    next();
  } catch (error) {
    res.status(403).json({ message: "The token is invalid or Expired!" });
  }
};
