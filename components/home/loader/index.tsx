import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

import { styles } from "@/components/home/loader/styles";
import { getTheme } from "@/constants/Theme";

const { spacing, colors } = getTheme();

const Spacer: React.FC<{ height?: number }> = ({ height = 16 }) => (
  <View style={{ height }} />
);

const Row: React.FC = () => (
  <View style={styles.loaderViewContainer}>
    <MotiView
      transition={{ type: "timing" }}
      style={[styles.loaderContainer, styles.loaderPadded]}
      animate={{ backgroundColor: colors.white }}
    >
      <Spacer />
      <Skeleton colorMode="light" width="100%" height={100} />
      <Spacer height={spacing.sm + 2} />
      <Skeleton colorMode="light" width="100%" />
      <Spacer height={spacing.sm + 2} />
      <Skeleton colorMode="light" width="100%" />
    </MotiView>
  </View>
);

export const HomeLoader: React.FC = () => {
  return (
    <>
      <Row />
      <Row />
      <Row />
    </>
  );
};
