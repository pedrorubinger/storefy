import { createContext, useCallback, useState } from "react";

import { getProductsUseCase } from "@/domain/getProductsUseCase";
import { Product } from "@/models/Product";

interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  error: string | null;
  isFetchingProducts: boolean;
  fetchProducts: () => Promise<void>;
  selectProduct: (product: Product | null) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isFetchingProducts, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await getProductsUseCase();

      setProducts(data);
    } catch {
      setError("Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const selectProduct = (product: Product | null) =>
    setSelectedProduct(product);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        isFetchingProducts,
        error,
        selectProduct,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
