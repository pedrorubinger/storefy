import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "@/components/button/styles";
import { Typography } from "@/components/typography";
import { useTheme } from "@/hooks/useTheme";
import { ColorName, FontName, FontSize } from "@/interfaces/Theme";

export interface ButtonProps extends TouchableOpacityProps {
  font?: FontName;
  size?: FontSize;
  color?: ColorName;
  backgroundColor?: ColorName;
  borderColor?: ColorName;
  icon?: React.ReactNode;
  format?: "rounded";
}

export const Button: React.FC<ButtonProps> = ({
  font = "default400",
  size = "md",
  color = "white",
  backgroundColor = "black",
  borderColor = "black",
  children,
  style,
  icon,
  format,
  onPress,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: theme.colors[backgroundColor],
          borderColor: theme.colors[borderColor],
        },
        format === "rounded" && styles.roundedBtn,
        style,
      ]}
      onPress={onPress}
      {...rest}
    >
      <Typography font={font} size={size} color={color}>
        {children}
      </Typography>
      {}
      {icon}
    </TouchableOpacity>
  );
};
