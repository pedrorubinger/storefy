import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, View } from "react-native";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeLoader } from "@/components/HomeLoader";
import { Input } from "@/components/Input";
import { Typography } from "@/components/Typography";
import { getTheme } from "@/constants/Theme";
import { styles } from "@/styles/home.styles";

const { colors } = getTheme();

const products = [
  {
    id: "1",
    title: "Awesome Product 1",
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
];

export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader name="Pedro Henrique" />

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Input placeholder="Search" />
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
            font="default600"
            icon={
              <Ionicons
                name="chevron-down"
                size={12}
                style={styles.sortByIcon}
                color={colors.white}
              />
            }
            style={styles.sortByBtn}
          >
            Sort by
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
              <Card
                title={item.title}
                price={item.price}
                thumbnail={item.thumbnail}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
