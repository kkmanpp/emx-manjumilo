import products from "@/products.json";

export const getProductsFromJson = () => {
  return products;
};

export const getProductBySkuFromJson = (sku) => {
  return products.find((product) => product.sku === sku);
};

export const getTrendingProductsFromJson = () => {
  return products.filter((product) => product.is_hot_sale_item === true);
};
