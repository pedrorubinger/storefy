import { SafeAreaView, View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { Input } from "@/components/Input";
import { styles } from "@/styles/home.styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader name="Pedro Henrique" />

        <View style={styles.searchContainer}>
          <Input placeholder="Search" />
        </View>
      </View>
    </SafeAreaView>
  );
}
