import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const theme = getTheme();

export const styles = StyleSheet.create({
  card: {
    maxWidth: "48%",
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: theme.radius.sm,
  },
  textContainer: {
    marginTop: theme.spacing.sm,
  },
  price: {
    marginTop: theme.spacing.xs,
  },
});
