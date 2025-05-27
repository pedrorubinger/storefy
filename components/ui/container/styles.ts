import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/theme";

const { colors, spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
});
