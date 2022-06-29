import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connectToDb = async () => {
  try {
    const uri = config.get<string>("mongoUri");
    await mongoose.connect(uri);
    logger.info("Connected to db ...");
  } catch (err: any) {
    logger.error("Couldn't Connect to db!");
    process.exit(1);
  }
};

export default connectToDb;
