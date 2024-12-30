import Image from "next/image";
import { getDictionary } from "./dictionaries";
import LinkButton from "@/components/LinkButton";
import TrendingProductViewer from "@/components/TrendingProductViewer";

export default async function Home({ params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);

	return (
		<div>
			<TrendingProductViewer lang={lang} />
		</div>
	);
}
