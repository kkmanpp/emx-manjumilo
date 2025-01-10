import products from "@/products.json";

export const getProducts = async () => {
  if (process.env.PRODUCT_DATA_SOURCE === "Strapi")
    return await getProductsFromStrapi();
  return getProductsFromJson();
};
export const getProductBySku = async (sku) => {
  if (process.env.PRODUCT_DATA_SOURCE === "Strapi")
    return await getProductBySkuFromStrapi(sku);
  return getProductBySkuFromJson(sku);
};

export const getTrendingProducts = async () => {
  if (process.env.PRODUCT_DATA_SOURCE === "Strapi")
    return await getTrendingProductsFromStrapi();
  return getTrendingProductsFromJson();
};

export const getProductsFromJson = () => {
  return products;
};

export const getProductBySkuFromJson = (sku) => {
  return products.find((product) => product.sku === sku);
};

export const getTrendingProductsFromJson = () => {
  return products.filter((product) => product.is_hot_sale_item === true);
};

export const getProductsFromStrapi = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add Authorization if your Strapi API requires it
          // Authorization: `Bearer your-strapi-api-token`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data; // Return the products array
  } catch (error) {
    console.error("Error fetching products from Strapi:", error);
    throw error; // Re-throw the error for further handling
  }
};

export const getProductBySkuFromStrapi = async (sku) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[sku][$eq]=${sku}&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include Authorization if needed
          // Authorization: `Bearer your-strapi-api-token`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data?.[0] || null; // The product information
  } catch (error) {
    console.error("Error fetching product by SKU:", error);
    throw error;
  }
};

export const getTrendingProductsFromStrapi = async () => {
  try {
    // Fetch products with populated data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[is_hot_sale_item][$eq]=true&populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Include Authorization if needed
          // Authorization: `Bearer your-strapi-api-token`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data || null; // The product information
  } catch (error) {
    console.error("Error fetching product by SKU:", error);
    throw error;
  }
};
