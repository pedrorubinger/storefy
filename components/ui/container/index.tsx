import { View, ViewProps } from "react-native";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";

import { HomeHeader } from "@/components/home/header";
import { styles } from "@/components/ui/container/styles";

interface ContainerProps extends NativeSafeAreaViewProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

interface ContainerContentProps extends ViewProps {
  children: React.ReactNode;
  /** @default true */
  useHeader?: boolean;
}

export const ContainerContent: React.FC<ContainerContentProps> = ({
  children,
  useHeader = true,
  style,
  ...rest
}) => {
  return (
    <View style={[styles.content, style]} {...rest}>
      {useHeader && <HomeHeader name="Pedro Rubinger" />}
      {children}
    </View>
  );
};
