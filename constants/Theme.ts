import { ISupportedTheme } from "@/interfaces/Theme";

export const AppTheme: ISupportedTheme = "light";

const tintColorLight = "#0a7ea4";

const Theme = {
  colors: {
    light: {
      text: "#11181C",
      background: "#fff",
      tint: tintColorLight,
      link: "#0a7ea4",
      icon: "#687076",
      tabIconDefault: "#687076",
      tabIconSelected: tintColorLight,
    },
  },
  fonts: {
    default100: "Inter_100Thin",
    default200: "Inter_200ExtraLight",
    default300: "Inter_300Light",
    default400: "Inter_400Regular",
    default500: "Inter_500Medium",
    default600: "Inter_600SemiBold",
    default700: "Inter_700Bold",
    default800: "Inter_800ExtraBold",
    default900: "Inter_900Black",
    default100Italic: "Inter_100Thin_Italic",
    default200Italic: "Inter_200ExtraLight_Italic",
    default300Italic: "Inter_300Light_Italic",
    default400Italic: "Inter_400Regular_Italic",
    default500Italic: "Inter_500Medium_Italic",
    default600Italic: "Inter_600SemiBold_Italic",
    default700Italic: "Inter_700Bold_Italic",
    default800Italic: "Inter_800ExtraBold_Italic",
    default900Italic: "Inter_900Black_Italic",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
    round: 9999,
  },
};

export const getTheme = (theme = "light" as ISupportedTheme) => {
  return { ...Theme, colors: Theme.colors[theme] };
};
