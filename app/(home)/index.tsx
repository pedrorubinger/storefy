import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Button } from "@/components/button";
import { Container, ScreenContent } from "@/components/container";
import { HomeProductCard } from "@/components/home/card";
import { HomeFilters } from "@/components/home/filters";
import { HomeHeader } from "@/components/home/header";
import { HomeLoader } from "@/components/home/loader";
import { Input } from "@/components/input";
import { Typography } from "@/components/typography";
import { getTheme } from "@/constants/Theme";
import { styles } from "@/styles/home.styles";

const { colors } = getTheme();
const products = [
  {
    id: "1",
    title: "iPhone 16 Pro",
    price: "$29.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: "2",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "3",
    title: "Awesome Product 1",
    price: "$29.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: "4",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "5",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "6",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "7",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "8",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "9",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
  {
    id: "10",
    title: "Awesome Product 2",
    price: "$19.99",
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
];

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const onOpenFilters = () => bottomSheetRef.current?.expand();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <GestureHandlerRootView style={styles.bottomSheetModalGestureHandler}>
      <Container>
        <ScreenContent>
          <HomeHeader name="Pedro Henrique" />

          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Input placeholder="Search product" size="sm" />
            </View>
          </View>

          <View style={styles.productsHeader}>
            <Typography font="default600" size="lg" color="grey700">
              Products
            </Typography>

            <Button
              size="sm"
              backgroundColor="primary"
              color="white"
              borderColor="grey100"
              font="default500"
              icon={
                <Ionicons
                  name="filter"
                  size={14}
                  style={styles.sortByIcon}
                  color={colors.white}
                />
              }
              format="rounded"
              onPress={onOpenFilters}
            >
              Filters
            </Button>
          </View>

          {isLoading ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <HomeLoader />
            </ScrollView>
          ) : (
            <FlatList
              data={products}
              keyExtractor={(item) => String(item.id)}
              contentContainerStyle={styles.productsList}
              renderItem={({ item }) => (
                <HomeProductCard
                  title={item.title}
                  price={item.price}
                  thumbnail={item.thumbnail}
                />
              )}
              numColumns={2}
              columnWrapperStyle={styles.productListColumnWrapper}
              showsVerticalScrollIndicator={false}
            />
          )}
        </ScreenContent>

        <HomeFilters bottomSheetRef={bottomSheetRef} />
      </Container>
    </GestureHandlerRootView>
  );
}
