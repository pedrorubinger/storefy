import { ProductCategory } from "@/models/Product";
import { fetchDummyCategories } from "@/services/api/products/api";
import { mapCategory } from "@/services/api/products/mappers";

interface OutputGetCategories {
  categories: ProductCategory[];
}

export async function getCategoriesUseCase(): Promise<OutputGetCategories> {
  const result = await fetchDummyCategories();

  return {
    categories: result.map(mapCategory) ?? [],
  };
}
