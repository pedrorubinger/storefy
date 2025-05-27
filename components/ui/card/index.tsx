import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "@/components/ui/card/styles";

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  pressable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  pressable = true,
  ...rest
}) => {
  if (pressable && onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.card, style]}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
};
