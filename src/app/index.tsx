import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Home() {
  const { db, drizzleDb } = useDatabase();
  const router = useRouter();

  useDrizzleStudio(db);

  return (
    <View style={{ width: 200, alignSelf: "center" }}>
      <Button
        onPress={() => router.navigate("/categories")}
        title="Categorías"
      />
    </View>
  );
}
