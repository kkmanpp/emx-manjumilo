import products from "./../../../products.json";

export default function handler(req, res) {
	const { sku } = req.query;
	const product = products.filter((item) => item.sku === sku);
	if (!product.length) return res.status(200).json({ product: [] });
	return res.status(200).json({ product: product });
}
