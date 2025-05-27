import { SelectOption } from "@/interfaces/select";

export const sortProductsByOptions: SelectOption[] = [
  { slug: "rating", name: "Rating" },
  { slug: "price", name: "Price" },
];

export const orderProductsByOptions: SelectOption[] = [
  { slug: "asc", name: "Ascending" },
  { slug: "desc", name: "Descending" },
];
