import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  bottomSheetModalGestureHandler: { flex: 1 },
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filterDescriptionContainer: {
    marginTop: spacing.xs,
    marginBottom: spacing.md,
  },
  sortByIcon: {
    marginLeft: spacing.xs,
  },
  productsList: {
    gap: spacing.md,
    paddingBottom: spacing.lg,
  },
  productListColumnWrapper: { justifyContent: "space-between" },
});
