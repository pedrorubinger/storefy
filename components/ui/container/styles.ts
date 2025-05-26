import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
  },
});
