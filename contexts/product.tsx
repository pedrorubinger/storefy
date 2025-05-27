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
  selectedCategory: string | undefined;
  fetchProducts: (params?: FetchProductsParams) => Promise<void>;
  fetchCategories: () => Promise<void>;
  selectProduct: (product: Product) => void;
  selectCategory: (category?: string) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
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

  const selectCategory = async (category?: string) => {
    setSelectedCategory(category);
    resetProducts();

    await fetchProducts({ category });
  };

  return (
    <ProductContext.Provider
      value={{
        selectedCategory,
        isFetchingCategories,
        meta,
        products,
        categories,
        selectedProduct,
        isFetchingProducts,
        isFetching: isFetchingCategories || isFetchingProducts,
        error: fetchProductsError || fetchCategoriesError,
        selectProduct,
        selectCategory,
        fetchProducts,
        fetchCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
