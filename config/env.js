import { config } from "dotenv";

// eslint-disable-next-line no-undef
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  DB_URI,
  NODE_ENV,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  USER_ID,
  USER_TOKEN,
  ARCJET_KEY,
  ARCJET_ENV,
} = process.env;
