import { View, Text, Button } from "react-native";
import React from "react";
import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

export default function Categories() {
  const { drizzleDb } = useDatabase();
  const { data } = useLiveQuery(drizzleDb.query.categories.findMany());

  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="text-2xl font-bold color-blue-900 text-center w-11/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Text>
    </View>
  );
}
