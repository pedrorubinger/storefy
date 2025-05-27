export interface FetchDummyProductParams {
  skip?: number;
  limit?: number;
  category?: string;
  sortBy?: string;
}

export interface FetchDummyProductResponse {
  products: DummyProductDTO[];
  total: number;
  skip: number;
  limit: number;
}

export interface DummyProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface DummyProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface DummyProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface DummyProductDTO {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DummyProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: DummyProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: DummyProductMeta;
  thumbnail: string;
  images: string[];
}

export interface FetchProductsMetadata {
  total: number;
  lastId?: number;
}

export type DummyCategoryDTO = string;

export type FetchDummyProductCategoryResponse = DummyCategoryDTO[];
