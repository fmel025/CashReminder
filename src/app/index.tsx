import { useDatabase } from "@Hooks/useDatabase";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { View, Text } from "react-native";

export default function Home() {
  const { db, drizzleDb } = useDatabase();

  useDrizzleStudio(db);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
