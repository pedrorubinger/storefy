import { SafeAreaView, View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { styles } from "@/styles/homeStyles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader name="Pedro" />
      </View>
    </SafeAreaView>
  );
}
