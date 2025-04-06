import { Suspense, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";

import {
  DarkTheme,
  ThemeProvider as NavThemeProvider,
  Theme,
} from "@react-navigation/native";

import { DATABASE_NAME } from "@env";
import { useDatabaseConnection } from "@Hooks/useDatabaseConnection";

import "../../global.css";

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
          <SafeAreaView className="bg-green-100 flex-1">
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen
                name="categories"
              />
            </Stack>
          </SafeAreaView>
        </SafeAreaProvider>
      </SQLiteProvider>
    </Suspense>
  );
}
