import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  rating: {
    marginBottom: spacing.sm,
  },
  star: {
    marginBottom: spacing.sm,
  },
});
