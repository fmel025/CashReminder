import { DATABASE_NAME } from "@env";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "drizzle/migrations";
import { openDatabaseSync } from "expo-sqlite";

export function useDatabaseConnection() {
  const expoDatabase = openDatabaseSync(DATABASE_NAME);
  const db = drizzle(expoDatabase);
  const { success, error } = useMigrations(db, migrations);
  return { success, error, expoDatabase };
}
