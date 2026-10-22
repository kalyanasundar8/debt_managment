import express from "express";
import "dotenv/config";
import shopRoutes from "./modules/shop/shop.routes.js";
import { logger } from "./shared/utils/logger.js";

const app = express();

const port = process.env.PORT || 3001;

app.use("/api/shops", shopRoutes);

app.listen(port, () => {
  logger.info(`Server listening port http://localhost:${port}`);
});
