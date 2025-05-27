import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { HomeProductCard } from "@/components/home/card";
import { HomeFilters } from "@/components/home/filters";
import { HomeLoader } from "@/components/home/loader";
import { Button } from "@/components/ui/button";
import { Container, ContainerContent } from "@/components/ui/container";
import { Error } from "@/components/ui/error";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { getTheme } from "@/constants/Theme";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useProduct } from "@/hooks/useProduct";
import { mapCategory } from "@/services/api/products/mappers";
import { styles } from "@/styles/home.styles";

const { colors } = getTheme();

export default function HomeScreen() {
  const isMounted = useIsMounted();
  const {
    products,
    meta,
    error,
    selectedFilters,
    isFetchingCategories,
    isFetchingProducts,
    fetchCategories,
    fetchProducts,
  } = useProduct();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const isLoading = isFetchingProducts || isFetchingCategories || !isMounted();

  const onOpenFilters = () => bottomSheetRef.current?.expand();

  const renderContent = useCallback(() => {
    if (error && !isLoading) {
      return <Error onRetry={() => fetchProducts()} />;
    }

    return (
      <>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Input placeholder="Search product" size="sm" />
          </View>
        </View>

        <View style={styles.productsHeader}>
          <Typography font="default600" size="lg" color="grey700">
            {selectedFilters?.category
              ? mapCategory(selectedFilters?.category)?.name
              : "Products"}
          </Typography>

          <Button
            size="sm"
            backgroundColor="primary"
            color="white"
            borderColor="primary"
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

        <View style={styles.filterDescriptionContainer}>
          <Typography font="default200" size="xs" color="grey700">
            {!!selectedFilters?.sortBy &&
              `Sorting by ${selectedFilters?.sortBy}`}
            &nbsp;
            {!!selectedFilters?.order &&
              (selectedFilters?.order === "asc" ? (
                <Feather name="arrow-down" />
              ) : (
                <Feather name="arrow-up" />
              ))}
          </Typography>
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
                fetchProducts({
                  category: selectedFilters?.category,
                  order: selectedFilters?.order,
                  sortBy: selectedFilters?.sortBy,
                });
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isLoading ? <HomeLoader /> : null}
          />
        )}
      </>
    );
  }, [
    fetchProducts,
    error,
    selectedFilters,
    isFetchingProducts,
    isLoading,
    meta.total,
    products,
  ]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [fetchProducts, fetchCategories]);

  return (
    <GestureHandlerRootView style={styles.bottomSheetModalGestureHandler}>
      <Container>
        <ContainerContent>{renderContent()}</ContainerContent>

        <HomeFilters bottomSheetRef={bottomSheetRef} />
      </Container>
    </GestureHandlerRootView>
  );
}
