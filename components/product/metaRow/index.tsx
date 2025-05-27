import { styles } from "@/components/product/metaRow/styles";
import { Typography } from "@/components/ui/typography";

interface Props {
  label: string;
  value: string | number;
}

export const MetaRow: React.FC<Props> = ({ label, value }: Props) => (
  <Typography
    font="default400"
    color="grey700"
    size="md"
    style={styles.metaText}
  >
    <Typography font="default600" color="black">
      {label}:
    </Typography>
    &nbsp;
    {value}
  </Typography>
);
