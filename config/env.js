import { config } from "dotenv";


// eslint-disable-next-line no-undef
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, DB_URI , NODE_ENV } = process.env;