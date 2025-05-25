import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCallback, useMemo } from "react";

import { Typography } from "@/components/Typography";
import { styles } from "@/styles/home.styles";

interface Props {
  bottomSheetRef: React.RefObject<BottomSheetMethods | null>;
}

export const HomeFilters: React.FC<Props> = ({ bottomSheetRef }) => {
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

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
    >
      <BottomSheetView style={styles.bottomSheetModal}>
        <Typography>Awesome 🎉</Typography>
      </BottomSheetView>
    </BottomSheet>
  );
};
