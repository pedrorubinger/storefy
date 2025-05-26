import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  bottomSheetModal: {
    marginTop: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  bottomSheetModalSectionContent: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  bottomSheetModalContent: { flex: 1 },
  bottomSheetModalFiltersContainer: {
    gap: spacing.sm,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomSheetModalScroll: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  bottomSheetModalBtnContainer: {
    padding: spacing.md,
    marginBottom: spacing.lg,
    gap: spacing.md,
  },
  bottomSheetModalIndicator: { display: "none" },
});
