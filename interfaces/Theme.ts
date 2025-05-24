import { getTheme } from "@/constants/Theme";

export type ISupportedTheme = "light";
export type ColorName = keyof ReturnType<typeof getTheme>["colors"];
export type ColorValue = ReturnType<typeof getTheme>["colors"][ColorName];
export type FontName = keyof ReturnType<typeof getTheme>["fonts"];
export type FontSize = keyof ReturnType<typeof getTheme>["fontSizes"];
