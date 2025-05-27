import { Card } from "@/components/ui/card";
import { Container, ContainerContent } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";

const product = {
  id: "1",
  title: "iPhone 16 Pro",
  price: "$29.99",
  image:
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
};

export default function ProductScreen() {
  return (
    <Container>
      <ContainerContent useHeader={false}>
        <Card>
          <Typography>Hello!</Typography>
        </Card>
      </ContainerContent>
    </Container>
  );
}
