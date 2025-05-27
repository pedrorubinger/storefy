import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "@/components/ui/card/styles";

interface CardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      {children}
    </TouchableOpacity>
  );
};
