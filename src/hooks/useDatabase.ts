import { drizzle } from "drizzle-orm/expo-sqlite";
import { SQLiteDatabase, useSQLiteContext } from "expo-sqlite";
import { schema } from "@Database/index";

export const useDatabase = () => {
  const db = useSQLiteContext();
  return drizzle(db, { schema });
}
 
