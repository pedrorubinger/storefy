import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { colors, radius, spacing } = getTheme();

export const styles = StyleSheet.create({
  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
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
});
