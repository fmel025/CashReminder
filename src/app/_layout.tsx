import { Suspense } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Slot, Stack } from "expo-router";

import {
  DarkTheme,
  ThemeProvider as NavThemeProvider,
  Theme,
} from "@react-navigation/native";

import "../../global.css";

export default function RootLayout() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SafeAreaProvider>
        <SafeAreaView className="bg-green-100 flex-1">
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="categories" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </Suspense>
  );
}
