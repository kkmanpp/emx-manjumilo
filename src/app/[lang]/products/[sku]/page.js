import { getDictionary } from "./../../dictionaries";

import ProductDetailViewer from "@/components/ProductDetailViewer";

export async function generateMetadata({ params }) {
	const sku = (await params).sku;

	const product = await fetch(`http://localhost:3001/api/products/${sku}`, {
		method: "GET",
	}).then((res) => res.json());

	return {
		title: product.product[0].name["cht"],
	};
}

export default async function Page({ params }) {
	const { sku, lang } = await params;
	const t = await getDictionary(lang);
	return (
		<div className="w-[40rem]">
			<ProductDetailViewer t={t} lang={lang} sku={sku} />
		</div>
	);
}
