import Image from "next/image";
import { getDictionary } from "./dictionaries";
import LinkButton from "@/components/LinkButton";
import TrendingProductViewer from "@/components/TrendingProductViewer";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Home({ params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);

	return (
		<div className="w-[60rem]">
			<TrendingProductViewer lang={lang} />
      <div>
        <div>
          <VideoPlayer src="5XDNHx2MQ40"/>
        </div>
      </div>
		</div>
	);
}
