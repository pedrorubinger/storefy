import { Product } from "@/models/Product";
import { fetchDummyProducts } from "@/services/api/products/api";
import { mapProduct } from "@/services/api/products/mappers";

interface OutputGetProduct {
  products: Product[];
  total: number;
}

interface InputGetProduct {
  skip?: number;
  limit?: number;
  category?: string;
  sortBy?: string;
  order?: string;
}

export async function getProductsUseCase({
  limit,
  skip,
  category,
  sortBy,
  order,
}: InputGetProduct): Promise<OutputGetProduct> {
  const result = await fetchDummyProducts({
    category,
    limit,
    sortBy,
    order,
    skip,
  });

  return {
    products: result.products.map(mapProduct) ?? [],
    total: result.total,
  };
}
