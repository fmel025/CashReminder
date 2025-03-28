import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { DB_NAME } from "../db";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        onPress={() =>
          Alert.alert("CashReminder App", "This is just made for testing")
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
