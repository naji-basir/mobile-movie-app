import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./globals.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200 font-bold">Basir Naji</Text>
      <Link href="/onboarding">onboarding</Link>
      <Link
        href={{
          pathname: "/movie/[id]",
          params: { id: "avengers" },
        }}
      >
        Avengers Movie
      </Link>
    </View>
  );
}
