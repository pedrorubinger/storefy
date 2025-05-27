import { Stack } from "expo-router";

import { getTheme } from "@/constants/theme";
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
