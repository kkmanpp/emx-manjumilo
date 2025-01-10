import { getDictionary } from "./dictionaries";
import TrendingProductViewer from "./products/components/TrendingProductViewer";
import { getTrendingProducts } from "@/lib/products";
import { getSectionDefinitions } from "../../lib/sectionDefinitions";
import SectionLayout from "@/components/SectionLayout";

export default async function Home({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const productList = await getTrendingProducts();

  const sectionDefinitions = getSectionDefinitions(t).homepage;

  return (
    <div className="largeMobile:px-4 w-full laptop:w-[65rem]">
      <div className="mx-2 my-4 font-bold dark:text-Grey-900 text-p1">
        {t.homepage.popularProduct}
      </div>
      <TrendingProductViewer
        lang={lang}
        dictionary={t}
        productList={productList}
      />
      <SectionLayout sections={sectionDefinitions} />
    </div>
  );
}

//  <div className="grid tablet:grid-cols-2 gap-y-4 tablet:gap-x-4 mt-8 grid-cols-1 w-full mx-0">
//         {/* Left grid */}
//         <div className="grid laptop:grid-rows-auto gap-4">
//           <SectionCard title={t.homepage.eventVideo}>
//             <div className="m-4 flex flex-col justify-center items-center ">
//               {/* <VideoPlayer videoUrl={process.env.VIDEO_URL} /> */}
//             </div>
//           </SectionCard>
//         </div>
//         {/* Right grid */}
//         <div className="grid grid-rows-auto laptop:grid-rows-auto gap-4">
//           <SectionCard title={t.homepage.ourPartner}>
//             <div className="m-4 pt-2 largeMobile:p-0 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
//               <Image
//                 src="/partner.gif"
//                 alt="our-partner"
//                 width={500}
//                 height={300}
//                 className="object-contain w-auto largeMobile:w-[28rem]"
//               />
//             </div>
//           </SectionCard>

//           <SectionCard title={t.homepage.promotion}>
//             <div className="m-4 largeMobile:flex largeMobile:flex-col largeMobile:items-center">
//               <Image
//                 src="/delta.jpeg"
//                 alt="promotion"
//                 width={500}
//                 height={300}
//                 className="object-contain w-auto laptop:w-[19rem]"
//               />
//             </div>
//           </SectionCard>
//         </div>
//       </div>
