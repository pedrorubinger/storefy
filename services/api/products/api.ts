import { Api } from "@/services/api";
import {
  FetchDummyProductCategoryResponse,
  FetchDummyProductParams,
  FetchDummyProductResponse,
} from "@/services/api/products/dtos";

export const fetchDummyProducts = async ({
  limit,
  skip,
  category,
}: FetchDummyProductParams): Promise<FetchDummyProductResponse> => {
  const { data } = await Api.get<FetchDummyProductResponse>(
    category ? `/products/category/${category}` : "/products",
    {
      params: { skip, limit },
    }
  );

  return data;
};

export const fetchDummyCategories = async () => {
  const { data } = await Api.get<FetchDummyProductCategoryResponse>(
    "/products/category-list"
  );

  return data;
};
