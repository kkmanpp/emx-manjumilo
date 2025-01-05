import KnowledgeCard from "@/app/[lang]/knowledge/components/KnowledgeCard";
import { getDictionary } from "../dictionaries";
import Image from "next/image";
import drink from "../../../../public/safeguard_drink.png";
import papaya from "../../../../public/papaya.png";
import planting from "../../../../public/papaya_planting.png";
import ingredients from "../../../../public/ingredients.png";
import jas from "../../../../public/JAS.png";
import factory from "../../../../public/factory.png";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const SAFEGUARD_LIST = t.safeguard;
  return (
    <div className="flex flex-col gap-4 w-full max-w-screen-lg mx-auto laptop:w-[65rem] tablet:px-4 tablet:my-4">
      <KnowledgeCard title={SAFEGUARD_LIST.card1.title}>
        <div className="grid grid-rows-[auto_auto_auto] grid-cols-1 tablet:grid-rows-[auto_auto] tablet:grid-cols-[1fr_4fr] tablet:gap-4 tablet:mx-2">
          <div className="col-start-1 col-span-1 row-start-1 tablet:col-span-2 flex flex-col justify-center items-center text-Grey-700">
            {SAFEGUARD_LIST.card1.description}
          </div>
          {/* <div className="grid grid-cols-[1fr_3fr] gap-x-4"> */}
          <div className="flex justify-self-center items-center col-span-2 tablet:col-start-1 tablet:col-span-1 tablet:row-start-2 tablet:justify-start tablet:items-start">
            <Image src={drink} alt="drink" width={200} height={100} />
          </div>
          <div className="grid tablet:grid-rows-[auto_auto_auto_1fr] tablet:gap-y-4 tablet:col-start-2 tablet:row-start-2 tablet:col-span-2 col-span-2 col-start-1 row-start-3">
            {SAFEGUARD_LIST.card1.subTitle.map((item, index) => {
              return (
                <div key={index}>
                  <div className="font-semibold text-Grey-700">{item}</div>
                  <div>{SAFEGUARD_LIST.card1.content[index]}</div>
                </div>
              );
            })}
          </div>
          {/* </div> */}
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card2.title}>
        <div className="grid grid-rows-[auto_auto] grid-cols-[auto_auto] grid-flow-row gap-y-2 mx-2">
          {/* <div className="grid grid-cols-[auto_auto] gap-x-2"> */}
          <div className="col-start-1 row-start-2 col-span-2">
            {SAFEGUARD_LIST.card2.content1.map((item, index) => {
              return (
                <div key={index} className="mb-2">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="col-start-1 row-start-1 flex flex-row justify-self-end relative w-[10rem] h-[10rem]">
            <Image src={papaya} alt="papaya" fill className="object-fill" />
          </div>
          {/* </div> */}
          {/* <div className="grid grid-cols-[auto_auto] gap-x-2"> */}
          <div className="col-start-1 col-span-2">
            {" "}
            &beta;-{SAFEGUARD_LIST.card2.content2}
          </div>
          <div className="col-start-2 row-start-1 flex flex-col items-start relative w-[10rem] h-[10rem]">
            <Image
              src={planting}
              alt="papaya-planting"
              fill
              className="object-fill w-auto "
            />
          </div>
          {/* </div> */}
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card3.title}>
        <div className="grid grid-cols-[1fr_4fr] grid-rows-[auto_auto] mx-2 gap-4">
          <div className="col-start-1 col-span-2 row-start-1 flex flex-col justify-center items-center text-Grey-700">
            {SAFEGUARD_LIST.card3.description}
          </div>
          <div className="col-start-1 tablet:col-span-1 row-start-2 flex tablet:flex-col tablet:justify-start items-center flex-row col-span-2 justify-center">
            <Image
              src={jas}
              alt="JAS"
              width={200}
              height={100}
              className="object-contain tablet:w-auto w-[10rem]"
            />
            <Image
              src={ingredients}
              alt="ingredients"
              width={200}
              height={80}
              className="object-contain tablet:w-auto w-[11rem]"
            />
          </div>
          <div className="grid grid-rows-[auto_auto_auto_auto] tablet:gap-x-4 tablet:col-start-2 tablet:row-start-2 tablet:col-span-1 col-span-2 col-start-1 row-start-3 gap-y-4">
            {SAFEGUARD_LIST.card3.subTitle.map((item, index) => {
              return (
                <div key={index}>
                  <div className="font-semibold text-Grey-700">{item}</div>
                  <div>{SAFEGUARD_LIST.card3.content[index]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card4.title}>
        <div className="grid grid-cols-[auto_auto] mx-2 gap-4 grid-rows-[auto_auto]">
          <div className="col-start-1 col-span-2 row-start-2 row-span-2 largeMobile:col-span-1 largeMobile:row-span-1 ">
            {SAFEGUARD_LIST.card4.content}
          </div>
          <div className="largeMobile:col-start-2 largeMobile:col-span-1 largeMobile:row-start-1 largeMobile:row-span-1 flex flex-col justify-center col-start-1 col-span-2 row-start-1 row-span-1 place-items-center">
            <Image
              src={factory}
              alt="factory"
              width={200}
              height={100}
              className="object-contain w-[12rem]"
            />
          </div>
        </div>
      </KnowledgeCard>
    </div>
  );
}
