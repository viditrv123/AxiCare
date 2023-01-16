"use strict";
import * as dotenv from "dotenv";
dotenv.config();

const MongoConfig = {
  UserName: process.env.MONGO_USERNAME,
  Password: process.env.MONGO_PASSWORD,
  DbName: process.env.MONGO_DB_NAME,
};

export default MongoConfig;
