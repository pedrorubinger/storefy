import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors } = getTheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
