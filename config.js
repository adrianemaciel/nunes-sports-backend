require("dotenv").config();

export const connectionString = process.env.SUPABASE_URL;
export const ssl = {
  rejectUnauthorized: false,
};
