import { useCallback, useState } from "react";

import { getCategoriesUseCase } from "@/domain/getCategoriesUseCase";
import { ProductCategory } from "@/models/Product";

export const useFetchCategories = () => {
  const [isFetchingCategories, setIsFetchingCategories] =
    useState<boolean>(false);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    setIsFetchingCategories(true);
    setError(null);

    try {
      const result = await getCategoriesUseCase();

      setCategories(result.categories);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsFetchingCategories(false);
    }
  }, []);

  return {
    isFetchingCategories,
    categories,
    error,
    fetchCategories,
  };
};
