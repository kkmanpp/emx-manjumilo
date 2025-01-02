export default async function sitemap() {
  const baseUrl = process.env.BASEURL || "http://localhost:3000";
  console.log(baseUrl);
  const tabs = ["profile", "contact", "feedback", "knowledge", "safeguard"];

  const allProducts = await fetch(`${process.env.BASEURL}/api/all-products/`, {
    method: "GET",
  }).then((res) => res.json());

  const pages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: { cht: `${baseUrl}/cht`, chs: `${baseUrl}/chs` },
      },
    },
  ];

  tabs.forEach((tab) => {
    let page = {
      url: `${baseUrl}/${tab}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      alternates: {
        languages: {
          cht: `${baseUrl}/cht/${tab}`,
          chs: `${baseUrl}/chs/${tab}`,
        },
      },
    };
    pages.push(page);
  });
  let products = allProducts.products.map((item) => {
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
  //   console.log(products);

  return [...pages, ...products];
}