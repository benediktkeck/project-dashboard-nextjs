import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { pgTableCreator } from "drizzle-orm/pg-core";
//import * as schema from "@/lib/schema";

config({ path: ".env" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

export const createTable = pgTableCreator((name) => `pdn_${name}`);