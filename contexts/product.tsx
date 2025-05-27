import { createContext, useState } from "react";

import {
  orderProductsByOptions,
  sortProductsByOptions,
} from "@/constants/product";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { FilterProductsParams, useFetchProduct } from "@/hooks/useFetchProduct";
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
  selectedFilters: FilterProductsParams | undefined;
  fetchProducts: (params?: FilterProductsParams) => Promise<void>;
  fetchCategories: () => Promise<void>;
  selectProduct: (product: Product) => void;
  selectFilters: (filters?: FilterProductsParams) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<
    FilterProductsParams | undefined
  >({
    order: orderProductsByOptions[0].slug,
    sortBy: sortProductsByOptions[0].slug,
  });

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

  const selectFilters = async (params?: FilterProductsParams) => {
    const category = params?.category;
    const sortBy = params?.sortBy;
    const order = params?.order;

    setSelectedFilters({ category, sortBy, order });
    resetProducts();

    await fetchProducts({ category, sortBy, order });
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
