import { useRouter } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

import { styles } from "@/components/home/card/styles";
import { StarRating } from "@/components/product/rating";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { formatCurrency } from "@/helpers/currency";
import { useProduct } from "@/hooks/useProduct";
import { Product } from "@/models/Product";

interface CardProps {
  product: Product;
}

export const HomeProductCardComponent: React.FC<CardProps> = ({ product }) => {
  const { selectProduct } = useProduct();
  const router = useRouter();

  const onOpenProductDetails = () => {
    selectProduct(product);
    router.navigate({ pathname: "/(home)/product" });
  };

  return (
    <Card type="pressable" style={styles.card} onPress={onOpenProductDetails}>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Typography font="default600" size="sm" color="grey700">
          {product.title}
        </Typography>
        <StarRating style={styles.rating} rating={product.rating} />
        <Typography
          style={styles.price}
          font="default500"
          size="sm"
          color="grey500"
        >
          {formatCurrency(product.price)}
        </Typography>
      </View>
    </Card>
  );
};

export const HomeProductCard = React.memo(
  HomeProductCardComponent,
  (prevProps, nextProps) =>
    prevProps.product.id === nextProps.product.id &&
    prevProps.product.price === nextProps.product.price &&
    prevProps.product.rating === nextProps.product.rating &&
    prevProps.product.title === nextProps.product.title &&
    prevProps.product.thumbnail === nextProps.product.thumbnail
);
