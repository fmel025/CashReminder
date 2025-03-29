import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../drizzle/migrations";
import { categories, db, Category, expo_sqlite } from "../database";
import { useEffect, useState } from "react";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

export default function App() {
  const [data, setData] = useState<Category[]>([]);
  const { success, error } = useMigrations(db, migrations);

  useDrizzleStudio(expo_sqlite)

  useEffect(() => {
    console.log(success, error);
    if (success) {
      (async () => {
        await db.delete(categories);
        await db.insert(categories).values({ name: "Test category " });
        const data = await db.query.categories.findMany();
        console.log(data);
        setData(data);
      })();
    }
  }, [success]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        onPress={() =>
          Alert.alert("CashReminder App", data.map((i) => i.name).join())
        }
        title="Press me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
