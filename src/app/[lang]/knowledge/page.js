import KnowledgeCard from "@/components/KnowledgeCard";
import { getDictionary } from "../dictionaries";
import Image from "next/image";
import flowChart from "../../../../public/flow-chart.png";

export default async function Page({ params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);

	return (
		<div className="flex flex-col gap-y-4 w-[50rem]">
			<KnowledgeCard title="衰老的過程就是氧化的過程">
				<div className="grid grid-rows-[auto_auto_auto_auto] m-4">
					<div className="flex flex-col justify-center items-center">
						<Image src={flowChart} alt="flow" width={500} height={100} />
					</div>
					<div>形成一個惡性循環</div>
					<div>
						據報道在50歲左右的時候， 人體內自由基攻擊細胞所造的損傷，
						約有30%轉化為衰老變性的有害物質。
					</div>
					<div className="text-[0.8rem] text-Grey-600">
						*自由基是機體氧化反應中產生的有害化合物
					</div>
				</div>
			</KnowledgeCard>
			<KnowledgeCard title="全面清點有什麼威脅了我們的健康">
				<div className="mx-4">
					<ul className="list-disc px-8">
						<li>食品污染：可能導致炎症或感染的有害物質</li>
						<li>添加劑：某些食品添加劑可能對健康有害</li>
						<li>吸煙與二手煙：吸煙和二手煙增加多種疾病風險</li>
						<li>空氣污染：空氣中的有害物質影響呼吸系統</li>
						<li>
							過量飲酒：過度飲酒會損害肝臟和其他器官，並增加多種疾病的風險
						</li>
						<li>
							汽車尾氣：汽車排放的廢氣含有多種有害物質，長期接觸可能導致健康問題
						</li>
						<li>激烈運動：過度運動可能導致身體損傷</li>
						<li>水污染：污染水源中的病原體和化學物質對健康有威脅</li>
						<li>吸入高氧：過量吸入高濃度氧氣可能損害肺部</li>
						<li>化學污染：生活環境中的化學物質對健康有影響</li>
						<li>放射線照射：長期暴露於放射線中增加健康風險</li>
						<li>農藥與化肥：殘留的農藥和化肥可能危害健康</li>
						<li>電腦輻射：長時間使用電子設備影響眼睛和神經系統</li>
						<li>藥劑等化學物質：日常接觸的藥物可能有副作用</li>
						<li>壓力與精神緊張：長期壓力影響免疫系統</li>
						<li>抗生素：不當使用抗生素可能導致抗藥性細菌</li>
					</ul>
					<div className="my-2">
						這些因素都可能導致體內產生更多的活性氧和自由基，進而損害細胞，導致各種健康問題
					</div>
				</div>
			</KnowledgeCard>
			<KnowledgeCard title="萬壽之露是什麼">
				<div className="mx-4 mb-2">
					萬壽之露是一種由發酵而成的抗氧化飲品，富含健康成分PAC。其原料包括：有機農場栽培的青木瓜、北陸產的玄米、北陸產的米糠、北海道產的海帶以及沖繩產的海藻。
					在發酵方面，使用了有益的微生物群，如酵母和乳酸菌等。這一過程經歷了六個月的五個階段發酵，並且經過一年以上的熟成。經過23年的技術積累，成功催生了健康成分PAC。
					在製作過程中，遵循ISO9001標準，並進行了細緻的品質管理，確保產品的高品質。
				</div>
			</KnowledgeCard>
		</div>
	);
}
