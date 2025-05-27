import { useCallback, useState } from "react";

import { getProductsUseCase } from "@/domain/getProductsUseCase";
import { Product } from "@/models/Product";
import { FetchProductsMetadata } from "@/services/api/products/dtos";

const DEFINITIONS = {
  limit: 10,
  initialProducts: [],
  initialMeta: { total: 0, lastId: 0 },
};

export interface FetchProductsParams {
  category?: string;
  sortBy?: string;
}

export const useFetchProduct = () => {
  const [isFetchingProducts, setIsFetchingProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<FetchProductsMetadata>(
    DEFINITIONS.initialMeta
  );

  const fetchProducts = useCallback(async (params?: FetchProductsParams) => {
    setIsFetchingProducts(true);
    setError(null);

    setMeta((prevMeta) => {
      getProductsUseCase({
        limit: params?.category ? undefined : DEFINITIONS.limit,
        page: params?.category ? undefined : prevMeta.lastId,
        category: params?.category,
        sortBy: params?.sortBy,
      })
        .then((data) => {
          const lastId =
            data.products.length === data.total && !data
              ? prevMeta.lastId
              : Number(data.products[data.products.length - 1]?.id);

          setMeta((prev) => ({
            ...prev,
            lastId: params?.category ? undefined : lastId,
            total: data.total || prev.total,
          }));

          setProducts((prev) => [...prev, ...data.products]);
          setIsFetchingProducts(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsFetchingProducts(false);
        });

      return prevMeta;
    });
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
