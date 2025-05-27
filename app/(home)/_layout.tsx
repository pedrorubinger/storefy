import { Stack } from "expo-router";
import React from "react";

import { getTheme } from "@/constants/Theme";

const { colors } = getTheme();

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="product"
        options={{
          headerShown: true,
          headerTintColor: colors.primary,
          title: "Product details",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
