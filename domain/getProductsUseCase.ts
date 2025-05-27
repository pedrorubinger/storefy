import { Product } from "@/models/Product";
import { fetchDummyProducts } from "@/services/api/products/api";
import { mapProduct } from "@/services/api/products/mappers";

interface OutputGetProduct {
  products: Product[];
  page: number;
  total: number;
}

interface InputGetProduct {
  page: number;
  limit: number;
}

export async function getProductsUseCase({
  limit,
  page,
}: InputGetProduct): Promise<OutputGetProduct> {
  const result = await fetchDummyProducts({ limit: limit, skip: page });

  return {
    products: result.products.map(mapProduct) ?? [],
    page: result.skip,
    total: result.total,
  };
}
