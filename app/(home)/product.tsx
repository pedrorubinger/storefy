import { Image, View } from "react-native";

import { MetaRow } from "@/components/product/metaRow";
import { StarRating } from "@/components/product/rating";
import { Card } from "@/components/ui/card";
import { Container, ContainerContent } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { styles } from "@/styles/product.styles";

const product = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  category: "beauty",
  price: 9.99,
  discountPercentage: 10.48,
  rating: 2.56,
  stock: 99,
  tags: ["beauty", "mascara"],
  brand: "Essence",
  sku: "BEA-ESS-ESS-001",
  weight: 4,
  dimensions: {
    width: 15.14,
    height: 13.08,
    depth: 22.99,
  },
  warrantyInformation: "1 week warranty",
  shippingInformation: "Ships in 3-5 business days",
  availabilityStatus: "In Stock",
  reviews: [
    {
      rating: 3,
      comment: "Would not recommend!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Eleanor Collins",
      reviewerEmail: "eleanor.collins@x.dummyjson.com",
    },
    {
      rating: 4,
      comment: "Very satisfied!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Lucas Gordon",
      reviewerEmail: "lucas.gordon@x.dummyjson.com",
    },
    {
      rating: 5,
      comment: "Highly impressed!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Eleanor Collins",
      reviewerEmail: "eleanor.collins@x.dummyjson.com",
    },
  ],
  returnPolicy: "No return policy",
  minimumOrderQuantity: 48,
  meta: {
    createdAt: "2025-04-30T09:41:02.053Z",
    updatedAt: "2025-04-30T09:41:02.053Z",
    barcode: "5784719087687",
    qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
  },
  images: [
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
};

export default function ProductScreen() {
  const image = product.images[0];

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
            source={{ uri: image }}
          />

          <View style={styles.detailsContainer}>
            <Typography
              size="xl"
              font="default600"
              color="black"
              style={styles.title}
            >
              {product.title}
            </Typography>

            <StarRating rating={product.rating} />

            <Typography
              font="default500"
              color="primary"
              size="md"
              style={styles.price}
            >
              ${product.price.toFixed(2)}
            </Typography>

            <Typography
              font="default400"
              color="grey700"
              size="sm"
              style={styles.description}
            >
              {product.description}
            </Typography>

            <View style={styles.metaInfo}>
              <MetaRow label="Brand" value={product.brand} />
              <MetaRow label="Warranty" value={product.warrantyInformation} />
              <MetaRow label="Shipping" value={product.shippingInformation} />
              <MetaRow label="Stock" value={`${product.stock} unit(s)`} />
            </View>

            <Typography
              font="default300Italic"
              size="sm"
              color="grey700"
              style={styles.returnPolicy}
            >
              Return Policy: {product.returnPolicy}
            </Typography>
          </View>
        </Card>
      </ContainerContent>
    </Container>
  );
}
