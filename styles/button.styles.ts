import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderRadius: radius.round,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
});
