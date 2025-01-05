import ProductDetailCard from "./ProductDetailCard";

export default function ProductDetailViewer({ product, t, lang }) {
	if (!product) return;

	return <ProductDetailCard product={product} dictionary={t} lang={lang} />;
}
