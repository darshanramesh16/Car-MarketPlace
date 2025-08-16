import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_BgPjJMZ90AyR@ep-super-wind-a8ircz3m-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
