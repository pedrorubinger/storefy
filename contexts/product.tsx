import { createContext, useCallback, useState } from "react";

import { getProductsUseCase } from "@/domain/getProductsUseCase";
import { Product } from "@/models/Product";

interface ProductContextType {
  products: Product[];
  selectedProduct: Product | null;
  error: string | null;
  isFetchingProducts: boolean;
  meta: FetchProductsMetadata;
  fetchProducts: () => Promise<void>;
  selectProduct: (product: Product | null) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

interface FetchProductsMetadata {
  total: number;
  lastId: number;
}

const DEFINITIONS = { limit: 20 };

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<FetchProductsMetadata>({
    total: 0,
    lastId: 0,
  });
  const [isFetchingProducts, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    setMeta((prevMeta) => {
      getProductsUseCase({
        limit: DEFINITIONS.limit,
        page: prevMeta.lastId,
      })
        .then((data) => {
          const lastId =
            data.products.length === data.total
              ? prevMeta.lastId
              : Number(data.products[data.products.length - 1].id);

          setMeta((prev) => ({
            ...prev,
            lastId,
            total: data.total || prev.total,
          }));

          setProducts((prev) => [...prev, ...data.products]);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });

      return prevMeta;
    });
  }, []);

  const selectProduct = (product: Product | null) =>
    setSelectedProduct(product);

  return (
    <ProductContext.Provider
      value={{
        meta,
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
