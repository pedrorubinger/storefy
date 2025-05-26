import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/components/container/styles";

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export const ScreenContent: React.FC<Props> = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};
