import KnowledgeCard from "@/components/KnowledgeCard";
import { getDictionary } from "../dictionaries";
import Image from "next/image";
import flowChart from "../../../../public/flow-chart.png";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const KNOWLEDGE_LIST = t.knowledge;

  return (
    <div className="flex flex-col gap-4 w-[50rem]">
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge6.title}>
        <div className="mx-4">{KNOWLEDGE_LIST.knowledge6.content}</div>
      </KnowledgeCard>
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge1.title}>
        <div className="grid grid-rows-[auto_auto_auto_auto] mx-4">
          <div className="flex flex-col justify-center items-center">
            <Image src={flowChart} alt="flow" width={500} height={100} />
          </div>
          <div className="flex flex-col justify-center items-center my-2">
            {KNOWLEDGE_LIST.knowledge1.description}
          </div>
          <div>{KNOWLEDGE_LIST.knowledge1.content}</div>
          <div className="text-[0.8rem] text-Grey-600">
            {KNOWLEDGE_LIST.knowledge1.complementary}
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge2.title}>
        <div className="mx-4">
          <ul className="list-disc px-8">
            {KNOWLEDGE_LIST.knowledge2.content.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <div className="my-2">{KNOWLEDGE_LIST.knowledge2.complementary}</div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge5.title}>
        <div className="mx-2">
          <div className="mt-2">{KNOWLEDGE_LIST.knowledge5.description}</div>
          <div className="my-2">
            <div className="text-Grey-600 font-bold">
              {KNOWLEDGE_LIST.knowledge5.subTitle1}
            </div>
            <div>{KNOWLEDGE_LIST.knowledge5.subDescription1}</div>
            <div>
              {KNOWLEDGE_LIST.knowledge5.content1.map((content, index) => {
                return <div key={index}>{content}</div>;
              })}
            </div>
          </div>
          <div className="my-2">
            <div className="text-Grey-600 font-bold">
              {KNOWLEDGE_LIST.knowledge5.subTitle2}
            </div>
            <div>{KNOWLEDGE_LIST.knowledge5.subDescription2}</div>
            <div>
              {KNOWLEDGE_LIST.knowledge5.content2.map((content, index) => {
                return <div key={index}>{content}</div>;
              })}
            </div>
          </div>
        </div>
      </KnowledgeCard>
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge3.title}>
        <div className="mx-4 mb-2">{KNOWLEDGE_LIST.knowledge3.content}</div>
      </KnowledgeCard>
      <KnowledgeCard title={KNOWLEDGE_LIST.knowledge4.title}>
        <div className="mx-4 mb-2">{KNOWLEDGE_LIST.knowledge4.content}</div>
      </KnowledgeCard>
    </div>
  );
}
