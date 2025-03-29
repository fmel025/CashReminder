import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import { StyleSheet, ActivityIndicator } from "react-native";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";

import { db, sqlite_db, DB_NAME as DATABASE_NAME } from "../database";
import migrations from "../drizzle/migrations";

import { Main } from "./main";

export default function App() {
  const { success, error } = useMigrations(db, migrations);

  useDrizzleStudio(sqlite_db);

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{
          enableChangeListener: true,
        }}
        useSuspense
      >
        <SafeAreaProvider>
          <Main />
        </SafeAreaProvider>
      </SQLiteProvider>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
