import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    marginTop: spacing.xs,
    paddingHorizontal: spacing.lg,
  },
  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryFilterBtn: {
    borderRadius: radius.md,
    backgroundColor: colors.green350,
    padding: spacing.sm,
  },
  searchContainer: {
    marginTop: spacing.xl,
  },
});
