import { getTheme } from "@/constants/theme";

const { colors } = getTheme();

export function useThemeColor(colorName: keyof typeof colors) {
  return colors[colorName];
}
