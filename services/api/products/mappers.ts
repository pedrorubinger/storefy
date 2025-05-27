import { capitalizeFirstLetter } from "@/helpers/string";
import { Product, ProductCategory } from "@/models/Product";
import {
  DummyCategoryDTO,
  DummyProductDTO,
} from "@/services/api/products/dtos";

export const mapProduct = (dto: DummyProductDTO): Product => {
  return {
    id: String(dto.id),
    availabilityStatus: dto.availabilityStatus,
    brand: dto.brand,
    category: dto.category,
    description: dto.description,
    price: dto.price,
    rating: dto.rating,
    returnPolicy: dto.returnPolicy,
    shippingInformation: dto.shippingInformation,
    stock: dto.stock,
    thumbnail: dto.thumbnail,
    title: dto.title,
    warrantyInformation: dto.warrantyInformation,
    image: dto.images[0],
  };
};

export const mapCategory = (dto: DummyCategoryDTO): ProductCategory => {
  return { slug: dto, name: capitalizeFirstLetter(dto.split("-").join(" ")) };
};
