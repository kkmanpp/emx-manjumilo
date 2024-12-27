"use client";
import ProductDetailCard from "@/components/ProductDetailCard";
import { useEffect, useState } from "react";

export default function ProductDetailViewer({ sku, lang, t }) {
	const [product, setProduct] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchProduct() {
			setError("");
			setProduct(null);
			await fetch(`/api/products/${sku}`)
				.then((response) => response.json())
				.then((data) => setProduct(data.product))
				.catch((err) => setError("Failed to get data"));
		}
		fetchProduct();
	}, []);

	if (!product) return <div>loading</div>;
	if (!product.length) return <div>No Such Product</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<ProductDetailCard dictionary={t} lang={lang} product={product[0]} />
		</div>
	);
}
