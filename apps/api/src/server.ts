import express from "express";
import "dotenv/config";
import cors from "cors";
import shopRoutes from "./modules/shop/shop.routes.js";
import { logger } from "./shared/utils/logger.js";
import { ConnectMongo } from "./shared/config/mongo.connect.js";

const app = express();

app.use(cors());
app.use(express.json());

ConnectMongo();

const port = process.env.PORT || 3001;

app.use("/api/shops", shopRoutes);

app.listen(port, () => {
  logger.info(`Server listening port http://localhost:${port}`);
});
