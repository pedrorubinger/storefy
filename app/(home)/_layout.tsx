import { getTheme } from "@/constants/Theme";
import { Stack } from "expo-router";
import React from "react";

const { colors } = getTheme();

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="product"
        options={{
          headerShown: true,
          title: "Product details",
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: colors.primary,
        }}
      />
    </Stack>
  );
}
