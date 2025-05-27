import { Stack } from "expo-router";
import React from "react";

import { getTheme } from "@/constants/Theme";
import { ProductProvider } from "@/contexts/product";

const { colors } = getTheme();

export default function HomeLayout() {
  return (
    <ProductProvider>
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
    </ProductProvider>
  );
}
