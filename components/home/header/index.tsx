import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "@/components/home/header/styles";
import { Typography } from "@/components/ui/typography";
import { getTheme } from "@/constants/theme";

interface Props {
  name: string;
}

const theme = getTheme();

export const HomeHeader: React.FC<Props> = ({ name }) => {
  const MAX_NAME_LENGTH = 15;
  const formattedName =
    name.length > MAX_NAME_LENGTH
      ? `${name.slice(0, MAX_NAME_LENGTH)}...`
      : `${name}`;

  return (
    <View style={styles.homeHeaderContainer}>
      <View style={styles.profileContainer}>
        <TouchableOpacity>
          <Image
            style={styles.profileFilterBtn}
            source={require("@/assets/images/avatar.jpg")}
          />
        </TouchableOpacity>

        <View>
          <Typography color="grey500" font="default300" size="sm">
            Welcome
          </Typography>
          <Typography color="primary" font="default600" size="md">
            {formattedName}
          </Typography>
        </View>
      </View>

      <TouchableOpacity style={styles.notificationBtn}>
        <Ionicons name="notifications" size={24} color={theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
