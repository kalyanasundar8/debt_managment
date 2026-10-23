import mongoose from "mongoose";
import { logger } from "../utils/logger.js";

export const ConnectMongo = async () => {
  const URI = process.env.MONGO_URI;
  try {
    if (!URI) {
      logger.error("MONGODB_URI is not defined");
      throw new Error("MONGODB_URI is not defined");
    }

    await mongoose.connect(URI);
    logger.info("MONGODB connected successfully");
  } catch (error) {
    logger.error({ err: error }, "MongoDb connection failed");
    throw error;
  }
};
