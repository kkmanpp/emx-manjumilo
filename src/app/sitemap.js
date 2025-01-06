import { getProductsFromJson } from "@/lib/products";
export default async function sitemap() {
  const baseUrl = process.env.BASEURL || "https://emx-manjumilo.vercel.app";
  const tabs = ["profile", "contact", "feedback", "knowledge", "safeguard"];

  const allProducts = (await getProductsFromJson()) || [];

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          cht: `${baseUrl}/cht`,
          chs: `${baseUrl}/chs`,
        },
      },
    },
  ];

  tabs.forEach((tab) => {
    pages.push({
      url: `${baseUrl}/${tab}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          cht: `${baseUrl}/cht/${tab}`,
          chs: `${baseUrl}/chs/${tab}`,
        },
      },
    });
  });

  const products = allProducts.map((item) => {
    return {
      url: `${baseUrl}/products/${item.sku}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          cht: `${baseUrl}/cht/products/${item.sku}`,
          chs: `${baseUrl}/chs/products/${item.sku}`,
        },
      },
    };
  });

  return [...pages, ...products];
}
