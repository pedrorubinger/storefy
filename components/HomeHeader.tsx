import React from "react";
import { View } from "react-native";

import { Typography } from "@/components/Typography";

interface Props {
  name: string;
}

export const HomeHeader: React.FC<Props> = ({ name }) => {
  const MAX_NAME_LENGTH = 11;
  const label =
    name.length > MAX_NAME_LENGTH
      ? `${name.slice(0, MAX_NAME_LENGTH)}...`
      : `${name}!`;

  return (
    <View>
      <View>
        <Typography color="grey500" size="lg">
          Hello,
        </Typography>
        <Typography color="koamaru300" font="default700" size="xxl">
          {label}
        </Typography>
      </View>
    </View>
  );
};
