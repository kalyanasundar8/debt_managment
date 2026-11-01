import JWT from "jsonwebtoken";
// Generate accesstoken
export const generateAccessToken = (id) => {
    return JWT.sign({ id }, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "5m",
    });
};
// Generate refreshtoken
export const generateRefreshToken = (id) => {
    return JWT.sign({ id }, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "10m",
    });
};
//# sourceMappingURL=generate.token.js.map