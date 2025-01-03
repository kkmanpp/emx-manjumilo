"use client";
import ProductOverviewCard from "./ProductOverviewCard";
import { useRouter } from "next/navigation";

export default function ProductViewer({ productList, lang, dictionary }) {
	const router = useRouter();

	const handleOnClick = (sku) => {
		router.push(`/products/${sku}`);
	};

	return (
		<div className="w-[45rem] grid grid-cols-2 gap-4 grid-flow-row mobile:w-full mobile:grid-cols-1 mobile:gap-2">
			{productList.map((product) => (
				<ProductOverviewCard
					key={product.sku}
					product={product}
					lang={lang}
					onClick={() => handleOnClick(product.sku)}
				/>
			))}
		</div>
	);
}
