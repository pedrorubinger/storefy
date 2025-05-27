import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/theme";

const { radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderRadius: radius.round,
  },
});
