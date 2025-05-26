import { Container, ScreenContent } from "@/components/container";
import { Typography } from "@/components/typography";

const name = "Pedro Henrique";

export default function ProductScreen() {
  return (
    <Container>
      <ScreenContent>
        <Typography>{name}</Typography>
      </ScreenContent>
    </Container>
  );
}
