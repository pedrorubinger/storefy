import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/theme";

const { radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  loaderViewContainer: { marginBottom: spacing.md },
  loaderContainer: { justifyContent: "center", borderRadius: radius.md },
  loaderPadded: { padding: spacing.md },
});
