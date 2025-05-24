import { getTheme } from "@/helpers/Theme";
import { StyleSheet } from "react-native";

const { colors } = getTheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
