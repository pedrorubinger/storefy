import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  retryBtn: {
    marginTop: spacing.md,
  },
});
