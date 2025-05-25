import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
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
  productsHeader: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByBtn: {
    paddingHorizontal: spacing.sm + 4,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByIcon: {
    marginLeft: spacing.xs,
  },
  productsList: {
    marginVertical: spacing.md,
    gap: spacing.lg,
  },
});
