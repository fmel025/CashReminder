import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase } from "expo-sqlite";
import { schema } from "@Database/index";

export const useDatabase = (database: SQLiteDatabase) =>
  drizzle(database, { schema });
