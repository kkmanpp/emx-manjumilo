"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductViewer({ lang, dictionary }) {
	const [productList, setProductList] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchAllProducts() {
			setError("");
			setProductList(null);
			await fetch("/api/all-products")
				.then((response) => response.json())
				.then((data) => setProductList(data.products))
				.catch((err) => console.log(err));
		}
		fetchAllProducts();
	}, []);

	if (!productList) return <div>loading</div>;

	return (
		<div className="w-[50rem] my-2">
			{productList.map((product) => {
				return (
					<ProductCard
						key={product.sku}
						product={product}
						lang={lang}
						dictionary={dictionary}
					/>
				);
			})}
		</div>
	);
}
