import { getTheme } from "@/constants/Theme";

const { colors } = getTheme();

export function useThemeColor(colorName: keyof typeof colors) {
  return colors[colorName];
}
