import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { DATABASE_NAME } from "@env"

import * as schema from "./schema";

export const DB_NAME = DATABASE_NAME;

export const expo_sqlite = openDatabaseSync(DB_NAME);
export const db = drizzle(expo_sqlite, { schema });