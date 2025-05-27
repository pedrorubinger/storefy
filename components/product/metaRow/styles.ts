import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  metaText: {
    marginBottom: spacing.xs,
  },
});
