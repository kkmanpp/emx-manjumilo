import Image from "next/image";
import { getDictionary } from "./dictionaries";
import TrendingProductViewer from "./products/components/TrendingProductViewer";
import VideoPlayer from "@/components/VideoPlayer";
import { getTrendingProductsFromJson } from "@/lib/products";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const productList = getTrendingProductsFromJson();

  return (
    <div className="largeMobile:px-4 w-full  laptop:w-[65rem]">
      <div className="mx-2 my-4 font-bold dark:text-Grey-900 text-p1">
        {t.homepage.popularProduct}
      </div>
      <TrendingProductViewer
        lang={lang}
        dictionary={t}
        productList={productList}
      />
      <div className="grid tablet:grid-cols-2 gap-y-4 tablet:gap-x-4 mt-8 grid-cols-1 w-full mx-0">
        <div className="bg-white">
          <div className="border-l-4 border-l-Green-600 m-2">
            <div className="px-4 font-semibold">{t.homepage.eventVideo}</div>
          </div>
          <div className="m-4 flex flex-col justify-center items-center ">
            {/* <VideoPlayer videoUrl={process.env.VIDEO_URL} /> */}
          </div>
        </div>
        <div className="grid grid-rows-[11rem_auto] gap-4">
          <div className="bg-white">
            <div className="border-l-4 border-l-Green-600 m-2">
              <div className="px-4 font-semibold">{t.homepage.ourPartner}</div>
            </div>
            <div className="m-4 pt-2 largeMobile:p-0 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
              <Image
                src="/partner.gif"
                alt="our-partner"
                width={500}
                height={300}
                className="object-contain w-auto largeMobile:w-[28rem]"
              />
            </div>
          </div>
          <div className="bg-white">
            <div className="border-l-4 border-l-Green-600 m-2">
              <div className="px-4 font-semibold">{t.homepage.promotion}</div>
            </div>
            <div className="m-4 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
              <Image
                src="/delta.jpeg"
                alt="promotion"
                width={500}
                height={300}
                className="object-contain w-auto laptop:w-[19rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
