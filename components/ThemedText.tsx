import { StyleSheet, Text, type TextProps } from "react-native";

import { getTheme } from "@/helpers/Theme";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

const { colors, fonts, fontSizes, spacing } = getTheme();

export function ThemedText({
  style,
  lightColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: fontSizes.md,
    lineHeight: spacing.lg,
    fontFamily: fonts.default400,
  },
  defaultSemiBold: {
    fontSize: fontSizes.md,
    lineHeight: spacing.lg,
    fontFamily: fonts.default600,
  },
  title: {
    fontSize: fontSizes.xxxl,
    lineHeight: spacing.xl,
    fontFamily: fonts.default700,
  },
  subtitle: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.default700,
  },
  link: {
    lineHeight: spacing.xl,
    fontSize: fontSizes.md,
    color: colors.link,
    fontFamily: fonts.default300,
  },
});
