import JWT from "jsonwebtoken";

// Generate accesstoken
export const generateAccessToken = (userId: String) => {
  return JWT.sign({ userId }, process.env.JWT_ACCESS_SECRET!, {
    expiresIn: "5m",
  });
};

// Generate refreshtoken
export const generateRefreshToken = (userId: String) => {
  return JWT.sign({ userId }, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: "10m",
  });
};
