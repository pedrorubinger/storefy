import { Linking, View } from "react-native";

import { Button } from "@/components/ui/button";
import { styles } from "@/components/ui/error/styles";
import { Typography } from "@/components/ui/typography";
import { useProduct } from "@/hooks/useProduct";

interface Props {
  onRetry?: () => void;
}

export const Error: React.FC<Props> = ({ onRetry }) => {
  const { error } = useProduct();

  const onGetHelp = () =>
    Linking.openURL("https://www.google.com/search?q=dogs");

  return (
    <View style={styles.container}>
      <Typography
        style={styles.title}
        font="default600"
        color="grey700"
        size="xl"
      >
        Something went wrong
      </Typography>
      <Typography
        font="default300"
        color="grey700"
        size="md"
        style={styles.text}
      >
        {error}
      </Typography>

      {!!onRetry && (
        <Button
          size="md"
          color="white"
          font="default500"
          backgroundColor="primary"
          borderColor="green350"
          style={styles.retryBtn}
          onPress={onRetry}
        >
          Retry
        </Button>
      )}

      <Button
        size="md"
        color="primary"
        font="default500"
        backgroundColor="white"
        borderColor="green350"
        style={styles.retryBtn}
        onPress={onGetHelp}
      >
        Get help
      </Button>
    </View>
  );
};
