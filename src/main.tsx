import { SafeAreaView } from "react-native-safe-area-context";
import { useLiveQuery } from "drizzle-orm/expo-sqlite";
import { useSQLiteContext } from "expo-sqlite";
import { View, Text } from "react-native";

import { useDatabase } from "@Hooks/useDatabase";

function Main() {
  const db = useSQLiteContext();
  const drizzleDb = useDatabase(db);

  // This is only an example and not final code
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
