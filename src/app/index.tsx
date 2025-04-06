import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useRouter } from "expo-router";
import { View, Text, Button, Pressable } from "react-native";

export default function Home() {
  const { db, drizzleDb } = useDatabase();
  const router = useRouter();

  useDrizzleStudio(db);

  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Pressable
        onPress={() => router.navigate("/categories")}
        className="bg-purple-500 p-4 rounded-md"
      >
        <Text className="text-white">Go to Categories</Text>
      </Pressable>
    </View>
  );
}
