import { useCallback, useState } from "react";

import { getProductsUseCase } from "@/domain/getProductsUseCase";
import { Product } from "@/models/Product";
import { FetchProductsMetadata } from "@/services/api/products/dtos";

const DEFINITIONS = {
  limit: 10,
  initialProducts: [],
  initialMeta: { total: 0, skip: 0 },
};

export interface FilterProductsParams {
  category?: string;
  sortBy?: string;
  order?: string;
}

export const useFetchProduct = () => {
  const [isFetchingProducts, setIsFetchingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<FetchProductsMetadata>(
    DEFINITIONS.initialMeta
  );

  const fetchProducts = useCallback(async (params?: FilterProductsParams) => {
    setIsFetchingProducts(true);
    setError(null);

    try {
      setMeta((prevMeta) => {
        const currentSkip = prevMeta.skip;
        const limit = DEFINITIONS.limit;

        getProductsUseCase({
          limit,
          skip: currentSkip,
          category: params?.category,
          sortBy: params?.sortBy,
          order: params?.order,
        })
          .then((data) => {
            setProducts((prev) => [...prev, ...data.products]);

            setMeta((prev) => ({
              ...prev,
              total: data.total,
              skip: prev.skip + data.products.length,
            }));
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setIsFetchingProducts(false);
          });
        return prevMeta;
      });
    } catch (err: any) {
      setError(err.message);
      setIsFetchingProducts(false);
    }
  }, []);

  const resetProducts = () => {
    setProducts(DEFINITIONS.initialProducts);
    setMeta(DEFINITIONS.initialMeta);
  };

  return {
    isFetchingProducts,
    products,
    error,
    meta,
    fetchProducts,
    resetProducts,
  };
};
