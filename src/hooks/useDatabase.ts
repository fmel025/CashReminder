import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase, useSQLiteContext } from "expo-sqlite";
import { schema } from "@Database/index";

export const useDatabase = () => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });
  return { db, drizzleDb };
};
