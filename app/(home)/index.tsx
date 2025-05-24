import { SafeAreaView } from "react-native";

import { styles } from "@/app/(home)/styles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView>
        <ThemedText type="title">Welcome!</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}
