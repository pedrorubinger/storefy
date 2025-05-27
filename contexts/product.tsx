import { createContext, useState } from "react";

import { useFetchCategories } from "@/hooks/useFetchCategories";
import { FetchProductsParams, useFetchProduct } from "@/hooks/useFetchProduct";
import { Product, ProductCategory } from "@/models/Product";
import { FetchProductsMetadata } from "@/services/api/products/dtos";

interface ProductContextType {
  products: Product[];
  categories: ProductCategory[];
  selectedProduct: Product | null;
  error: string | null;
  isFetchingProducts: boolean;
  isFetchingCategories: boolean;
  isFetching: boolean;
  meta: FetchProductsMetadata;
  selectedFilters: FetchProductsParams | undefined;
  fetchProducts: (params?: FetchProductsParams) => Promise<void>;
  fetchCategories: () => Promise<void>;
  selectProduct: (product: Product) => void;
  selectFilters: (filters?: FetchProductsParams) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<
    FetchProductsParams | undefined
  >();

  const {
    error: fetchProductsError,
    isFetchingProducts,
    meta,
    products,
    resetProducts,
    fetchProducts,
  } = useFetchProduct();

  const {
    categories,
    fetchCategories,
    isFetchingCategories,
    error: fetchCategoriesError,
  } = useFetchCategories();

  const selectProduct = (product: Product | null) =>
    setSelectedProduct(product);

  const selectFilters = async (params?: FetchProductsParams) => {
    const category = params?.category;
    const sortBy = params?.sortBy;

    setSelectedFilters({ category, sortBy });
    resetProducts();

    await fetchProducts({ category, sortBy });
  };

  return (
    <ProductContext.Provider
      value={{
        selectedFilters,
        isFetchingCategories,
        meta,
        products,
        categories,
        selectedProduct,
        isFetchingProducts,
        isFetching: isFetchingCategories || isFetchingProducts,
        error: fetchProductsError || fetchCategoriesError,
        selectProduct,
        selectFilters,
        fetchProducts,
        fetchCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
