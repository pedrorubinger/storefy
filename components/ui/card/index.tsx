import React from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

import { styles } from "@/components/ui/card/styles";

type CardPressableProps = {
  type?: "pressable";
  onPress: () => void;
} & TouchableOpacityProps;

type CardScrollProps = {
  type: "scroll";
} & ScrollViewProps;

type CardViewProps = {
  type?: "view";
} & ViewProps;

type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & (CardPressableProps | CardScrollProps | CardViewProps);

export const Card: React.FC<CardProps> = ({ children, style, ...rest }) => {
  const type =
    rest.type || (rest.hasOwnProperty("onPress") ? "pressable" : "view");

  if (type === "pressable") {
    const { onPress, ...touchableProps } = rest as CardPressableProps;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.card, style]}
        {...touchableProps}
      >
        {children}
      </TouchableOpacity>
    );
  }

  if (type === "scroll") {
    const scrollProps = rest as CardScrollProps;
    return (
      <ScrollView style={[styles.card, style]} {...scrollProps}>
        {children}
      </ScrollView>
    );
  }

  const viewProps = rest as CardViewProps;

  return (
    <View style={[styles.card, style]} {...viewProps}>
      {children}
    </View>
  );
};
