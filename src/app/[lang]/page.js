import Image from "next/image";
import { getDictionary } from "./dictionaries";
import TrendingProductViewer from "./products/components/TrendingProductViewer";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  let productList;
  let error = "";

  await fetch(`${process.env.BASEURL}/api/best-selling-products`)
    .then((response) => response.json())
    .then((data) => (productList = data.data))
    .catch((err) => (error = "Failed to get data"));

  console.log(productList);

  return (
    <div className="w-[65rem]">
      <div className="mx-2 my-4 font-bold dark:text-Grey-900 text-p1">
        {t.homepage.popularProduct}
      </div>
      <TrendingProductViewer
        lang={lang}
        dictionary={t}
        productList={productList}
        error={error}
      />
      <div className="grid grid-cols-2 gap-x-8 mt-8 mx-2">
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
