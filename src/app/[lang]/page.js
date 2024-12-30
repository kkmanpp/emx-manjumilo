import Image from "next/image";
import { getDictionary } from "./dictionaries";
import LinkButton from "@/components/LinkButton";
import TrendingProductViewer from "@/components/TrendingProductViewer";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Home({ params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);

	return (
		<div className="w-[65rem]">
			<TrendingProductViewer lang={lang} />
			<div className="grid grid-cols-2 gap-x-8 mt-8">
				<div className="bg-white">
					<div className="border-l-4 border-l-Green-600 m-2">
						<div className="px-4 font-semibold">{t.homepage.eventVideo}</div>
					</div>
					<div className="m-4 flex flex-col justify-center items-center">
						<VideoPlayer videoId="5XDNHx2MQ40" />
					</div>
				</div>
				<div className="grid grid-rows-[11rem_auto] gap-4">
					<div className="bg-white">
						<div className="border-l-4 border-l-Green-600 m-2">
							<div className="px-4 font-semibold">{t.homepage.ourPartner}</div>
						</div>
						<div className="m-2">
							<Image
								src="/partner.gif"
								alt="our-partner"
								width={500}
								height={300}
							/>
						</div>
					</div>
					<div className="bg-white">
						<div className="border-l-4 border-l-Green-600 m-2">
							<div className="px-4 font-semibold">{t.homepage.promotion}</div>
						</div>
						<div className="m-4">
							<Image
								src="/delta.jpeg"
								alt="promotion"
								width={500}
								height={300}
								className="object-contain w-[30rem] h-[10rem]"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
