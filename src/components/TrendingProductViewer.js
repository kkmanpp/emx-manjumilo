"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Card from "@/components/Card";

export default function TrendingProductViewer({ lang }) {
	const [productList, setProductList] = useState(null);
	const [error, setError] = useState("");
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchAllTrendingProducts() {
			setError("");
			setProductList(null);
			setLoading(true);
			await fetch("api/best-selling-products")
				.then((response) => response.json())
				.then((data) => setProductList(data.data))
				.catch((err) => setError("Failed to get data"))
				.finally(() => setLoading(false));
		}
		fetchAllTrendingProducts();
	}, []);

	if (!productList)
		return (
			<div className="flex p-32 items-center justify-center">
				<Image src="/loading.gif" alt="Loading..." width={100} height={100} />
			</div>
		);
	if (error)
		return (
			<div className="text-red-600 flex flex-col items-center justify-center">
				{error}
			</div>
		);

	return (
		<div className="grid grid-cols-4 gap-4 w-[60rem]">
			{productList.map((item) => {
				return (
					<Card
						key={item.sku}
						title={item.name[lang]}
						image={item.image[0]}
						primaryDesc={item.ad_slogan[lang]}
						onClick={() => router.push(`/products/${item.sku}`)}
					/>
				);
			})}
		</div>
	);
}
