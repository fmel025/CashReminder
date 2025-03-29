import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSQLiteContext } from "expo-sqlite";
import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

function Main() {
  const db = useSQLiteContext();
  const drizzleDb = useDatabase(db);

  const { data } = useLiveQuery(drizzleDb.query.categories.findMany());

  return (
    <SafeAreaView>
      <View>
        <Text>{data.map((i) => i.name).join(", ")}</Text>
      </View>
    </SafeAreaView>
  );
}

export { Main };
