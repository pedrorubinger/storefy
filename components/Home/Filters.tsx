import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCallback, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { ColorName } from "@/interfaces/Theme";
import { styles } from "@/styles/home.styles";

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

const categories = [
  "Eletronics",
  "Cars",
  "Clothes",
  "Computers",
  "Smartphones",
  "Kitchen",
  "House",
  "Sports",
  "Shoes",
  "Pets",
] as const;

const sortOptions = ["Rating", "Price"] as const;

type Category = (typeof categories)[number];
type SortOption = (typeof sortOptions)[number];

const FilterButtons = <T extends string>({
  options,
  selected,
  onSelect,
}: {
  options: readonly T[];
  selected: T | null;
  onSelect: (option: T) => void;
}) => (
  <View style={styles.bottomSheetModalFiltersContainer}>
    {options.map((option) => {
      const isSelected = option === selected;
      const backgroundColor: ColorName = isSelected ? "primary" : "grey300";
      const borderColor: ColorName = isSelected ? "green400" : "grey100";

      return (
        <Button
          key={option}
          size="sm"
          color="white"
          font="default500"
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          style={styles.roundedBtn}
          onPress={() => onSelect(option)}
        >
          {option}
        </Button>
      );
    })}
  </View>
);

export const HomeFilters: React.FC<Props> = ({ bottomSheetRef }) => {
  const snapPoints = useMemo(() => ["70%"], []);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
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

  const toggleSelection = <T extends string>(
    value: T,
    selected: T | null,
    setter: React.Dispatch<React.SetStateAction<T | null>>
  ) => {
    setter(selected === value ? null : value);
  };

  const onApply = () => {
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
              <FilterButtons<Category>
                options={categories}
                selected={selectedCategory}
                onSelect={(category) =>
                  toggleSelection(
                    category,
                    selectedCategory,
                    setSelectedCategory
                  )
                }
              />
            </View>

            <View style={styles.bottomSheetModalSectionContent}>
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
            </View>
          </ScrollView>

          <View style={styles.bottomSheetModalBtnContainer}>
            <Button
              size="sm"
              color="white"
              font="default500"
              backgroundColor="primary"
              borderColor="green400"
              onPress={onApply}
            >
              Apply filters
            </Button>

            <Button
              size="sm"
              color="primary"
              font="default500"
              backgroundColor="white"
              borderColor="green400"
              onPress={onCancel}
            >
              Cancel
            </Button>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
