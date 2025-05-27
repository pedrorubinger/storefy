import { Product } from "@/models/Product";
import { fetchDummyProducts } from "@/services/api/products/api";
import { mapProduct } from "@/services/api/products/mappers";

interface OutputGetProduct {
  products: Product[];
  page: number;
  total: number;
}

interface InputGetProduct {
  page?: number;
  limit?: number;
  category?: string;
  sortBy?: string;
  order?: string;
}

export async function getProductsUseCase({
  limit,
  page,
  category,
  sortBy,
  order,
}: InputGetProduct): Promise<OutputGetProduct> {
  const result = await fetchDummyProducts({
    category,
    limit,
    sortBy,
    order,
    skip: page,
  });

  return {
    products: result.products.map(mapProduct) ?? [],
    page: result.skip,
    total: result.total,
  };
}
