import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const { spacing, radius } = getTheme();

export const styles = StyleSheet.create({
  card: {
    maxWidth: "48%",
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: radius.sm,
  },
  textContainer: {
    marginTop: spacing.xs,
  },
  price: {
    marginTop: spacing.xs,
  },
  rating: {
    marginTop: spacing.xs,
  },
});
