import { type Config } from "drizzle-kit";

export default {
    schema: ["./src/lib/schema.ts", "./src/lib/auth-schema.ts"],
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    tablesFilter: ["pdn_*"],
} satisfies Config;
