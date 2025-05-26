import { Stack } from "expo-router";
import React from "react";

export default function HomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="product"
        options={{
          headerShown: true,
          title: "Product details",
        }}
      />
    </Stack>
  );
}
