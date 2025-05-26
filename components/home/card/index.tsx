import { Link } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "@/components/home/card/styles";
import { Typography } from "@/components/ui/typography";

interface CardProps {
  title: string;
  price: string;
  thumbnail: string;
  onPress?: () => void;
}

export const HomeProductCard: React.FC<CardProps> = ({
  title,
  price,
  thumbnail,
  onPress,
}) => {
  return (
    <Link href="/(home)/product" asChild>
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Typography font="default600" size="sm" color="grey700">
            {title}
          </Typography>
          <Typography font="default500" size="sm" color="grey500">
            {price}
          </Typography>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
