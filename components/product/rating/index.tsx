import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { StyleProp, TextStyle } from "react-native";

import { styles } from "@/components/product/rating/styles";
import { Typography } from "@/components/ui/typography";

interface Props {
  rating: number;
  style?: StyleProp<TextStyle>;
}

const DEFINITION = {
  totalStars: 5,
  starSize: 14,
};

export const StarRating: React.FC<Props> = ({ rating, style }) => {
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  const hasHalfStar = decimal >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesome
        key={`full-${i}`}
        name="star"
        size={DEFINITION.starSize}
        color="gold"
        style={styles.star}
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FontAwesome
        key="half"
        name="star-half-o"
        size={DEFINITION.starSize}
        color="gold"
        style={styles.star}
      />
    );
  }

  const remaining = DEFINITION.totalStars - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < remaining; i++) {
    stars.push(
      <FontAwesome
        key={`empty-${i}`}
        name="star-o"
        size={DEFINITION.starSize}
        color="gold"
        style={styles.star}
      />
    );
  }

  return (
    <Typography
      font="default400"
      color="grey700"
      size="xs"
      style={[styles.rating, style]}
    >
      {rating.toFixed(1)} {stars}
    </Typography>
  );
};
