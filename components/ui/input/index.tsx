import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { styles } from "@/components/ui/input/styles";
import { useTheme } from "@/hooks/useTheme";
import { ColorName, FontName, FontSize } from "@/interfaces/theme";

export interface InputProps extends TextInputProps {
  font?: FontName;
  size?: FontSize;
  color?: ColorName;
  backgroundColor?: ColorName;
  borderColor?: ColorName;
}

export const Input: React.FC<InputProps> = ({
  font = "default400",
  size = "md",
  color = "black",
  backgroundColor = "white",
  borderColor = "grey200",
  style,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        {
          fontFamily: theme.fonts[font],
          fontSize: theme.fontSizes[size],
          color: theme.colors[color],
          backgroundColor: theme.colors[backgroundColor],
          borderColor: theme.colors[borderColor],
        },
        style,
      ]}
      placeholderTextColor={theme.colors["grey500"]}
      {...rest}
    />
  );
};
