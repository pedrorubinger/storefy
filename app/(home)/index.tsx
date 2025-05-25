import { SafeAreaView, View } from "react-native";

import { Button } from "@/components/Button";
import { HomeHeader } from "@/components/HomeHeader";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { getTheme } from "@/constants/Theme";
import { styles } from "@/styles/home.styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const { colors } = getTheme();

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader name="Pedro Henrique" />

        <View style={styles.searchContainer}>
          <Input placeholder="Search" />
        </View>

        <View style={styles.productsHeader}>
          <Typography font="default800" color="grey700">
            Products
          </Typography>

          <Button
            size="xs"
            backgroundColor="white"
            color="grey300"
            borderColor="grey200"
            font="default500"
            icon={
              <Ionicons
                name="chevron-down"
                size={12}
                style={styles.sortByIcon}
                color={colors.grey300}
              />
            }
            style={styles.sortByBtn}
          >
            Sort by
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
