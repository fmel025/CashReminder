import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { DATABASE_NAME } from "@env";

import { schema } from "./schema";

const sqlite_db = openDatabaseSync(DATABASE_NAME);
const db = drizzle(sqlite_db, { schema });

export { sqlite_db, db, DATABASE_NAME };
