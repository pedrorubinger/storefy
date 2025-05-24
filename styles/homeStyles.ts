import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.lg,
  },
});
