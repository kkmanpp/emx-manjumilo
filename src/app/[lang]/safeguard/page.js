import KnowledgeCard from "@/components/KnowledgeCard";
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
    <div className="flex flex-col gap-4 w-full max-w-screen-lg mx-auto px-4">
      <KnowledgeCard title={SAFEGUARD_LIST.card1.title}>
        <div className="grid grid-cols-[1fr_3fr] gap-4 mx-2">
          <div className="col-start-1 col-span-2 flex flex-col justify-center items-center text-Grey-700">
            {SAFEGUARD_LIST.card1.description}
          </div>
          <div className="flex flex-col justify-start">
            <Image src={drink} alt="drink" width={200} height={100} />
          </div>
          <div className="grid grid-rows-[auto_1fr_1fr_1fr] gap-y-4">
            {SAFEGUARD_LIST.card1.subTitle.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item}</div>
                  <div>{SAFEGUARD_LIST.card1.content[index]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card2.title}>
        <div className="grid grid-rows-2 gap-4 mx-2">
          <div className="grid grid-cols-[auto_auto] gap-x-2">
            <div>
              {SAFEGUARD_LIST.card2.content1.map((item, index) => {
                return (
                  <div key={index} className="mb-2">
                    {item}
                  </div>
                );
              })}
            </div>
            <div>
              <Image src={papaya} alt="papaya" width={160} height={80} />
            </div>
          </div>
          <div className="grid grid-cols-[auto_auto] gap-x-2">
            <div> &beta;-{SAFEGUARD_LIST.card2.content2}</div>
            <Image
              src={planting}
              alt="papaya-planting"
              width={160}
              height={80}
            />
            <div></div>
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card3.title}>
        <div className="grid grid-cols-[auto_auto] mx-2 gap-4">
          <div className="col-start-1 col-span-2 flex flex-col justify-center items-center text-Grey-700">
            {SAFEGUARD_LIST.card3.description}
          </div>
          <div>
            <Image src={jas} alt="JAS" width={200} height={100} />
            <Image
              src={ingredients}
              alt="ingredients"
              width={200}
              height={80}
            />
          </div>
          <div className="grid grid-rows-[auto_auto_auto_auto] gap-x-4">
            {SAFEGUARD_LIST.card3.subTitle.map((item, index) => {
              return (
                <div key={index}>
                  <div>{item}</div>
                  <div>{SAFEGUARD_LIST.card3.content[index]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={SAFEGUARD_LIST.card4.title}>
        <div className="grid grid-cols-[auto_auto] mx-2 gap-4">
          <div>{SAFEGUARD_LIST.card4.content}</div>
          <div>
            <Image src={factory} alt="factory" width={200} height={100} />
          </div>
        </div>
      </KnowledgeCard>
    </div>
  );
}
