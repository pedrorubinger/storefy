import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/components/home/filters/styles";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  orderProductsByOptions,
  sortProductsByOptions,
} from "@/constants/product";
import { FilterProductsParams } from "@/hooks/useFetchProduct";
import { useProduct } from "@/hooks/useProduct";
import { ColorName } from "@/interfaces/theme";
import { ProductCategory } from "@/models/Product";

interface HomeFiltersProps {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

type FilterButtonsProps<T> = {
  options: readonly T[];
  selected: string | null | undefined;
  onSelect: (option: T) => void;
};

const getButtonColors = (
  isSelected: boolean
): { backgroundColor: ColorName; borderColor: ColorName } => ({
  backgroundColor: isSelected ? "primary" : "grey300",
  borderColor: isSelected ? "green400" : "grey100",
});

const FilterButtons = <T extends ProductCategory>({
  options,
  selected,
  onSelect,
}: FilterButtonsProps<T>) => (
  <View style={styles.bottomSheetModalFiltersContainer}>
    {options.map((option) => {
      const isSelected = option.slug === selected;
      const { backgroundColor, borderColor } = getButtonColors(isSelected);

      return (
        <Button
          key={option.slug}
          size="md"
          color="white"
          font="default500"
          format="rounded"
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          onPress={() => onSelect(option)}
        >
          {option.name}
        </Button>
      );
    })}
  </View>
);

export const HomeFilters: React.FC<HomeFiltersProps> = ({ bottomSheetRef }) => {
  const [unsavedFilters, setUnsavedFilters] = useState<FilterProductsParams>();

  const { categories, selectFilters } = useProduct();
  const snapPoints = useMemo(() => ["80%"], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const handleApply = () => {
    selectFilters(unsavedFilters);
    bottomSheetRef.current?.close();
  };

  const handleCancel = () => {
    bottomSheetRef.current?.close();
  };

  const handleCategorySelect = (category: ProductCategory) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      category: category.slug === prev?.category ? undefined : category.slug,
    }));
  };

  const handleSortBySelect = (sortBy: { slug: string; name: string }) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      sortBy: sortBy.slug === prev?.sortBy ? undefined : sortBy.slug,
    }));
  };

  const handleOrderBySelect = (order: { slug: string; name: string }) => {
    setUnsavedFilters((prev) => ({
      ...prev,
      order: order.slug === prev?.order ? undefined : order.slug,
    }));
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.bottomSheetModalIndicator}
    >
      <BottomSheetView style={[styles.bottomSheetModal, { flex: 1 }]}>
        <View style={styles.bottomSheetModalContent}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.bottomSheetModalScroll}
          >
            <View style={styles.bottomSheetModalSectionContent}>
              <Typography font="default600" size="md" color="black">
                Shop by category
              </Typography>
              <FilterButtons<ProductCategory>
                options={categories}
                selected={unsavedFilters?.category}
                onSelect={handleCategorySelect}
              />
            </View>

            <View style={styles.bottomSheetModalSectionContent}>
              <Typography font="default600" size="md" color="black">
                Sort products by
              </Typography>
              <FilterButtons
                options={sortProductsByOptions}
                selected={unsavedFilters?.sortBy}
                onSelect={handleSortBySelect}
              />
            </View>

            <View style={styles.bottomSheetModalSectionContent}>
              <Typography font="default600" size="md" color="black">
                Order products by
              </Typography>
              <FilterButtons
                options={orderProductsByOptions}
                selected={unsavedFilters?.order}
                onSelect={handleOrderBySelect}
              />
            </View>
          </ScrollView>

          <SafeAreaView
            edges={["bottom", "left", "right"]}
            style={styles.bottomSheetModalBtnContainer}
          >
            <Button
              size="md"
              color="white"
              font="default500"
              backgroundColor="primary"
              borderColor="green400"
              onPress={handleApply}
              disabled={!unsavedFilters}
            >
              Apply filters
            </Button>

            <Button
              size="md"
              color="primary"
              font="default500"
              backgroundColor="white"
              borderColor="green400"
              onPress={handleCancel}
            >
              Cancel
            </Button>
          </SafeAreaView>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
