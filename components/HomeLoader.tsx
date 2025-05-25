import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

import { getTheme } from "@/constants/Theme";
import { styles } from "@/styles/home.styles";

const { spacing, colors } = getTheme();

const Spacer: React.FC<{ height?: number }> = ({ height = 16 }) => (
  <View style={{ height }} />
);

const Row: React.FC = () => (
  <View style={{ marginBottom: 20 }}>
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
