import React from "react";
import { Image, View } from "react-native";

import { Typography } from "@/components/Typography";
import { styles } from "@/styles/card.styles";

interface CardProps {
  title: string;
  price: string;
  thumbnail: string;
}

export const Card: React.FC<CardProps> = ({ title, price, thumbnail }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Typography font="default600" size="lg" color="grey700">
          {title}
        </Typography>
        <Typography font="default500" size="md" color="grey700">
          {price}
        </Typography>
      </View>
    </View>
  );
};
