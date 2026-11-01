import express from "express";
import type { ErrorRequestHandler } from "express";
import "dotenv/config";
import cors from "cors";
import shopRoutes from "./modules/shop/shop.routes.js";
import { logger } from "./shared/utils/logger.js";
import { ConnectMongo } from "./shared/config/mongo.connect.js";
import userRoutes from "./modules/user/user.routes.js";
import memberRoutes from "./modules/member/member.routes.js";
import { AppError } from "./shared/helpers/custom.error.js";

const app = express();

app.use(cors());
app.use(express.json());

ConnectMongo();

const port = process.env.PORT || 3001;

app.use("/api/shops", shopRoutes);
app.use("/api/users", userRoutes);
app.use("/api/shops", memberRoutes);

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
    return;
  }

  logger.error({ err: error }, "Unhandled API error");
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server listening port http://localhost:${port}`);
});
