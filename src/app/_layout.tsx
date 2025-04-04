import { Suspense, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

import { DATABASE_NAME } from "@env";
import { useDatabaseConnection } from "@Hooks/useDatabaseConnection";

export default function RootLayout() {
  const { success, error } = useDatabaseConnection();

  useEffect(() => {
    console.log(success, error);
  }, [success, error]);

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider
        databaseName={DATABASE_NAME}
        options={{ enableChangeListener: true }}
        useSuspense
      >
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Stack>
              <Stack.Screen name="index" />
              <Stack.Screen name="categories" />
            </Stack>
          </SafeAreaView>
        </SafeAreaProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
