import { Product } from "@/models/Product";
import { fetchDummyProducts } from "@/services/api/products/api";
import { mapProduct } from "@/services/api/products/mappers";

export async function getProductsUseCase(): Promise<Product[]> {
  const dtos = await fetchDummyProducts();

  return dtos.map(mapProduct);
}
