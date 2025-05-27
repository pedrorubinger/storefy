import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { HomeProductCard } from "@/components/home/card";
import { HomeFilters } from "@/components/home/filters";
import { HomeLoader } from "@/components/home/loader";
import { Button } from "@/components/ui/button";
import { Container, ContainerContent } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { getTheme } from "@/constants/Theme";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useProduct } from "@/hooks/useProduct";
import { styles } from "@/styles/home.styles";

const { colors } = getTheme();

export default function HomeScreen() {
  const isMounted = useIsMounted();
  const { products, meta, isFetchingProducts, fetchProducts } = useProduct();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const isLoading = isFetchingProducts || !isMounted();

  const onOpenFilters = () => bottomSheetRef.current?.expand();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <GestureHandlerRootView style={styles.bottomSheetModalGestureHandler}>
      <Container>
        <ContainerContent>
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
                  color={isLoading ? colors.grey500 : colors.white}
                />
              }
              format="rounded"
              disabled={isLoading}
              onPress={onOpenFilters}
            >
              Filters
            </Button>
          </View>

          {isLoading && !products?.length ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <HomeLoader />
            </ScrollView>
          ) : (
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.productsList}
              renderItem={({ item }) => <HomeProductCard product={item} />}
              numColumns={2}
              columnWrapperStyle={styles.productListColumnWrapper}
              showsVerticalScrollIndicator={false}
              onEndReached={() => {
                if (!isFetchingProducts && products.length < meta.total) {
                  fetchProducts();
                }
              }}
              onEndReachedThreshold={0.5}
              ListFooterComponent={isLoading ? <HomeLoader /> : null}
            />
          )}
        </ContainerContent>

        <HomeFilters bottomSheetRef={bottomSheetRef} />
      </Container>
    </GestureHandlerRootView>
  );
}
