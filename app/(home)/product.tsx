import { Image, View } from "react-native";

import { MetaRow } from "@/components/product/metaRow";
import { StarRating } from "@/components/product/rating";
import { Card } from "@/components/ui/card";
import { Container, ContainerContent } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { useProduct } from "@/hooks/useProduct";
import { styles } from "@/styles/product.styles";

export default function ProductScreen() {
  const { selectedProduct } = useProduct();

  if (!selectedProduct) {
    return null;
  }

  return (
    <Container>
      <ContainerContent useHeader={false} style={styles.content}>
        <Card
          type="scroll"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            resizeMode="contain"
            style={styles.productImage}
            source={{ uri: selectedProduct.image }}
          />

          <View style={styles.detailsContainer}>
            <Typography
              size="xl"
              font="default600"
              color="black"
              style={styles.title}
            >
              {selectedProduct.title}
            </Typography>

            <StarRating rating={selectedProduct.rating} />

            <Typography
              font="default500"
              color="primary"
              size="md"
              style={styles.price}
            >
              ${selectedProduct.price.toFixed(2)}
            </Typography>

            <Typography
              font="default400"
              color="grey700"
              size="sm"
              style={styles.description}
            >
              {selectedProduct.description}
            </Typography>

            <View style={styles.metaInfo}>
              <MetaRow label="Brand" value={selectedProduct.brand} />
              <MetaRow
                label="Warranty"
                value={selectedProduct.warrantyInformation}
              />
              <MetaRow
                label="Shipping"
                value={selectedProduct.shippingInformation}
              />
              <MetaRow
                label="Stock"
                value={`${selectedProduct.stock} unit(s)`}
              />
            </View>

            <Typography
              font="default300Italic"
              size="sm"
              color="grey700"
              style={styles.returnPolicy}
            >
              Return Policy: {selectedProduct.returnPolicy}
            </Typography>
          </View>
        </Card>
      </ContainerContent>
    </Container>
  );
}
