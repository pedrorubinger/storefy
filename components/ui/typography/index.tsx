import React from "react";
import { Text, TextProps } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { ColorName, FontName, FontSize } from "@/interfaces/customTheme";

export interface TypographyProps {
  font?: FontName;
  color?: ColorName;
  size?: FontSize;
}

interface Props extends TypographyProps, TextProps {}

export const Typography: React.FC<Props> = ({
  children,
  font = "default400",
  size = "md",
  color = "grey500",
  style,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Text
      {...rest}
      style={[
        {
          fontFamily: theme.fonts[font],
          fontSize: theme.fontSizes[size],
          color: theme.colors[color],
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
