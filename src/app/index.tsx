import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";

export default function Home() {
  const router = useRouter();

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
