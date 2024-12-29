"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductOverviewCard from "./ProductOverviewCard";

export default function ProductViewer({ lang, dictionary }) {
	const [productList, setProductList] = useState(null);
	const [error, setError] = useState("");
	const router = useRouter();

	const handleOnClick = (id) => {
		console.log(id);
		router.push(`/products/${id}`);
	};

	useEffect(() => {
		async function fetchAllProducts() {
			setError("");
			setProductList(null);
			await fetch("/api/all-products")
				.then((response) => response.json())
				.then((data) => setProductList(data.products))
				.catch((err) => setError("Failed to get data"));
		}
		fetchAllProducts();
	}, []);

	if (!productList) return <div>loading</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="w-[45rem] grid grid-cols-2 gap-4 grid-flow-row">
			{productList.map((product) => {
				return (
					<ProductOverviewCard
						key={product.sku}
						product={product}
						lang={lang}
						onClick={() => handleOnClick(product.sku)}
					/>
				);
			})}
		</div>
	);
}
