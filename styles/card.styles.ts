import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/Theme";

const theme = getTheme();

// styles/card.styles.ts
export const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 150,
    maxWidth: "48%",
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: theme.colors.grey100,

    shadowColor: theme.colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    elevation: 3,

    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  thumbnail: {
    width: 90,
    height: 90,
    borderRadius: theme.radius.sm,
  },
  textContainer: {
    marginTop: theme.spacing.sm,
  },
});
