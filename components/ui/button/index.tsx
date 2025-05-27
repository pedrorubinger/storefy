import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "@/components/ui/button/styles";
import { Typography } from "@/components/ui/typography";
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
  disabled?: boolean;
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
  disabled = false,
  ...rest
}) => {
  const theme = useTheme();

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: disabled
        ? theme.colors.grey300
        : theme.colors[backgroundColor],
      borderColor: disabled ? theme.colors.grey500 : theme.colors[borderColor],
      opacity: disabled ? 0.6 : 1,
    },
    format === "rounded" && styles.roundedBtn,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      {...rest}
    >
      <Typography font={font} size={size} color={disabled ? "grey500" : color}>
        {children}
      </Typography>
      {icon}
    </TouchableOpacity>
  );
};
