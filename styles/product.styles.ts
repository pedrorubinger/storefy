import { StyleSheet } from "react-native";

import { getTheme } from "@/constants/theme";

const { spacing } = getTheme();

export const styles = StyleSheet.create({
  content: {
    marginBottom: spacing.lg,
  },
  productImage: {
    width: "100%",
    height: 180,
  },
  detailsContainer: {
    padding: spacing.md,
  },
  title: {
    marginBottom: spacing.sm,
  },
  price: {
    marginBottom: spacing.sm,
  },
  description: {
    marginBottom: spacing.md,
  },
  metaInfo: {
    marginTop: spacing.sm,
  },
  returnPolicy: {
    marginTop: spacing.lg,
  },
});
