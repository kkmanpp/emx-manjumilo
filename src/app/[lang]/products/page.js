import ProductViewer from "./components/ProductViewer";
import { getDictionary } from "../dictionaries";
import { getProductsFromJson } from "@/lib/products";

export default async function Page({ params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);
	const products = getProductsFromJson();

	return (
		<div className="flex flex-col justify-center items-center my-4 mobile:my-0">
			<ProductViewer dictionary={t} lang={lang} productList={products} />
		</div>
	);
}
