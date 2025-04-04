import { View, Text, Button } from "react-native";
import React from "react";
import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

export default function Categories() {
  const { drizzleDb } = useDatabase();
  const { data } = useLiveQuery(
    drizzleDb.query.categories.findMany()
  );

  return (
    <View>
      <Text>
        Available categories: {data.map(({ name }) => name).join(", ")}
      </Text>
    </View>
  );
}
