import { Product } from "@/models/Product";
import { DummyProductDTO } from "@/services/api/products/dtos";

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
