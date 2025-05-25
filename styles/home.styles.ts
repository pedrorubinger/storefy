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
    marginTop: spacing.md,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  notificationBtn: {
    borderRadius: radius.round,
    borderWidth: 1,
    borderColor: colors.grey100,
    backgroundColor: colors.white,
    padding: spacing.sm,
  },
  profileFilterBtn: {
    width: 45,
    height: 45,
    borderRadius: radius.round,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.lg,
    gap: spacing.md,
  },
  searchInputContainer: {
    flex: 1,
  },
  productsHeader: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sortByIcon: {
    marginLeft: spacing.xs,
  },
  productsList: {
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },
  loaderViewContainer: { marginBottom: spacing.md },
  loaderContainer: { justifyContent: "center", borderRadius: radius.md },
  loaderPadded: { padding: spacing.md },
  bottomSheetModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
