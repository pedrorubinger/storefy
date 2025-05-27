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
import { sortProductsByOptions } from "@/constants/product";
import { FetchProductsParams } from "@/hooks/useFetchProduct";
import { useProduct } from "@/hooks/useProduct";
import { ColorName } from "@/interfaces/theme";
import { ProductCategory } from "@/models/Product";

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

const FilterButtons = <T extends ProductCategory>({
  options,
  selected,
  onSelect,
}: {
  options: readonly T[];
  selected: string | null | undefined;
  onSelect: (option: T) => void;
}) => (
  <View style={styles.bottomSheetModalFiltersContainer}>
    {options.map((option) => {
      const isSelected = option.slug === selected;
      const backgroundColor: ColorName = isSelected ? "primary" : "grey300";
      const borderColor: ColorName = isSelected ? "green400" : "grey100";

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

export const HomeFilters: React.FC<Props> = ({ bottomSheetRef }) => {
  const [unsavedFilters, setUnsavedFilters] = useState<
    FetchProductsParams | undefined
  >();

  const { categories, selectFilters } = useProduct();
  const snapPoints = useMemo(() => ["75%"], []);

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

  const onApply = () => {
    selectFilters(unsavedFilters);
    bottomSheetRef.current?.close();
  };

  const onCancel = () => {
    bottomSheetRef.current?.close();
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
                onSelect={(category) =>
                  setUnsavedFilters((prev) => ({
                    ...prev,
                    category:
                      category.slug === prev?.category
                        ? undefined
                        : category.slug,
                  }))
                }
              />
            </View>

            <View style={styles.bottomSheetModalSectionContent}>
              <Typography font="default600" size="md" color="black">
                Sort products by
              </Typography>
              <FilterButtons
                options={sortProductsByOptions}
                selected={unsavedFilters?.sortBy}
                onSelect={(sortBy) =>
                  setUnsavedFilters((prev) => ({
                    ...prev,
                    sortBy:
                      sortBy.slug === prev?.sortBy ? undefined : sortBy.slug,
                  }))
                }
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
              onPress={onApply}
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
              onPress={onCancel}
            >
              Cancel
            </Button>
          </SafeAreaView>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
