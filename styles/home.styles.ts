import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, radius, spacing } = getTheme();

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
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  searchInputContainer: {
    flex: 1,
  },
  productsHeader: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByIcon: {
    marginLeft: spacing.xs,
  },
  productsList: {
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
});
