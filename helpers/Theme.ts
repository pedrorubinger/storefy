/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ISupportedTheme } from "@/interfaces/Theme";

const tintColorLight = "#0a7ea4";

const Theme = {
  colors: {
    light: {
      text: "#11181C",
      background: "#fff",
      tint: tintColorLight,
      icon: "#687076",
      tabIconDefault: "#687076",
      tabIconSelected: tintColorLight,
    },
  },
};

export const getTheme = (theme = "light" as ISupportedTheme) => {
  return { ...Theme, colors: Theme.colors[theme] };
};
