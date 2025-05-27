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
import { useProduct } from "@/hooks/useProduct";
import { ColorName } from "@/interfaces/theme";
import { ProductCategory } from "@/models/Product";

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

const sortOptions = ["Rating", "Price"] as const;

type SortOption = (typeof sortOptions)[number];

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
  const [temporaryCategory, setTemporaryCategory] = useState<
    string | undefined
  >();
  const [temporaryOrder, setTemporaryOrder] = useState<string | null>(null);

  const { categories, selectCategory } = useProduct();
  const snapPoints = useMemo(() => ["75%"], []);
  const [selectedOrder, setSelectedOrder] = useState<SortOption | null>(null);

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

  const toggleSelection = (
    slug: string,
    selected: string | null | undefined,
    setter: React.Dispatch<React.SetStateAction<string | undefined>>
  ) => {
    setter(selected === slug ? undefined : slug);
  };

  const onApply = () => {
    selectCategory(temporaryCategory);
    // setSelectedOrder(temporaryOrder);
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
                selected={temporaryCategory}
                onSelect={(category) =>
                  toggleSelection(
                    category.slug,
                    temporaryCategory,
                    setTemporaryCategory
                  )
                }
              />
            </View>

            {/* <View style={styles.bottomSheetModalSectionContent}>
              <Typography font="default600" size="md" color="black">
                Sort products by
              </Typography>
              <FilterButtons<SortOption>
                options={sortOptions}
                selected={selectedOrder}
                onSelect={(order) =>
                  toggleSelection(order, selectedOrder, setSelectedOrder)
                }
              />
            </View> */}
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
              disabled={!temporaryCategory && !selectedOrder}
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
