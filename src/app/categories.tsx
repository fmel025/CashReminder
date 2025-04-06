import { View, Text, Button, FlatList, Pressable } from "react-native";
import React from "react";
import { useDatabase } from "@Hooks/useDatabase";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";

export default function Categories() {
  const { drizzleDb } = useDatabase();
  const { data } = useLiveQuery(drizzleDb.query.categories.findMany());

  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="text-2xl font-bold color-blue-900 text-center w-11/12">
        <FlatList
          scrollEnabled
          data={[...data]}
          renderItem={({ item }) => (
            <>
              <Pressable
                className="mt-2 bg-purple-200 p-4 rounded-md"
                onPress={() => alert(`Has seleccionado ${item.name}`)}
              >
                <Text className="text-xl font-medium color-blue-900 text-center">
                  {item.name}
                </Text>
              </Pressable>
            </>
          )}
        />
      </Text>
    </View>
  );
}
