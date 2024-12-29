import products from "./../../products.json";

export default async function handler(req, res) {
  let trendingProducts = products.filter((item) => {
    return item.is_hot_sale_item === true;
  });
  return res.status(200).json({ data: trendingProducts });
}
