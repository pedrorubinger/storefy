import { getTheme } from "@/helpers/Theme";

const { colors } = getTheme();

export function useThemeColor(colorName: keyof typeof colors) {
  return colors[colorName];
}
