import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HomeHeader } from "@/components/home/header";
import { styles } from "@/components/ui/container/styles";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

interface ContainerContentProps {
  children: React.ReactNode;
  /** @default true */
  useHeader?: boolean;
}

export const ContainerContent: React.FC<ContainerContentProps> = ({
  children,
  useHeader = true,
}) => {
  return (
    <View style={styles.content}>
      {useHeader && <HomeHeader name="Pedro Rubinger" />}
      {children}
    </View>
  );
};
