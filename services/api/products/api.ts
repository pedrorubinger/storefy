import { Api } from "@/services/api";
import {
  FetchDummyProductParams,
  FetchDummyProductResponse,
} from "@/services/api/products/dtos";

export const fetchDummyProducts = async ({
  limit,
  skip,
}: FetchDummyProductParams): Promise<FetchDummyProductResponse> => {
  const { data } = await Api.get<FetchDummyProductResponse>("/products", {
    params: { skip, limit },
  });

  return data;
};
