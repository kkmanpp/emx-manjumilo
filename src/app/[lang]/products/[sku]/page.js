import { getDictionary } from "./../../dictionaries";

import ProductDetailViewer from "@/components/ProductDetailViewer";

export default async function Page({ params }) {
	const { sku, lang } = await params;
	const t = await getDictionary(lang);
	return (
		<div className="w-[40rem]">
			<ProductDetailViewer t={t} lang={lang} sku={sku} />
		</div>
	);
}
