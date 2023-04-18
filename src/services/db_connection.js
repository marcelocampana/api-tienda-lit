import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const environment = process.env.NODE_ENV || "development";

const envFilePath =
  environment === "production" ? ".env.production" : ".env.local";
dotenv.config({ path: envFilePath });

const dbConfig = {
  username: process.env.SUPABASE_USERNAME,
  password: process.env.SUPABASE_PASS,
  database: process.env.SUPABASE_DB,
  host: process.env.SUPABASE_HOST,
  port: "5432",
  dialect: "postgres",
  logging: false,
};

const sequelize = new Sequelize(dbConfig);

export default sequelize;
