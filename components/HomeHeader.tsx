import React from "react";
import { View } from "react-native";

import { Typography } from "@/components/Typography";
import { getTheme } from "@/constants/Theme";
import { styles } from "@/styles/home.styles";

const { colors } = getTheme();

interface Props {
  name: string;
}

export const HomeHeader: React.FC<Props> = ({ name }) => {
  const MAX_NAME_LENGTH = 15;
  const label =
    name.length > MAX_NAME_LENGTH
      ? `${name.slice(0, MAX_NAME_LENGTH)}...`
      : `${name}!`;

  return (
    <View style={styles.homeHeaderContainer}>
      <View>
        <Typography color="grey500" size="lg">
          Hello,
        </Typography>
        <Typography color="primary" font="default700" size="xl">
          {label}
        </Typography>
      </View>
    </View>
  );
};
