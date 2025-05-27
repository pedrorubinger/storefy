import { Api } from "@/services/api";
import {
  DummyProductDTO,
  FetchDummyProductResponse,
} from "@/services/api/products/dtos";

export const fetchDummyProducts = async (): Promise<DummyProductDTO[]> => {
  const { data } = await Api.get<FetchDummyProductResponse>("/products");

  return data.products;
};
