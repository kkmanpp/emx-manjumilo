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
		<div className="flex flex-col gap-4 w-full max-w-screen-lg mx-auto px-4 my-4 mobile:!px-0 mobile:!my-0 mobile:!mx-0">
			<KnowledgeCard title={SAFEGUARD_LIST.card1.title}>
				<div className="grid grid-rows-[auto_auto] grid-cols-[1fr_4fr] gap-4 mx-2">
					<div className="col-start-1 col-span-2 row-start-1 flex flex-col justify-center items-center text-Grey-700">
						{SAFEGUARD_LIST.card1.description}
					</div>
					{/* <div className="grid grid-cols-[1fr_3fr] gap-x-4"> */}
					<div className="justify-start items-center col-start-1 col-span-1 row-start-2 mobile:!col-span-2 mobile:!justify-self-center">
						<Image src={drink} alt="drink" width={200} height={100} />
					</div>
					<div className="grid grid-rows-[auto_auto_auto_1fr] gap-y-4 col-start-2 row-start-2 col-span-1 mobile:!col-span-2 mobile:!col-start-1 mobile:row-start-3">
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
				<div className="grid grid-rows-[auto_auto] gap-4 mx-2">
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
					</div>
				</div>
			</KnowledgeCard>
			<KnowledgeCard title={SAFEGUARD_LIST.card3.title}>
				<div className="grid grid-cols-[1fr_4fr] grid-rows-[auto_auto] mx-2 gap-4">
					<div className="col-start-1 col-span-2 row-start-1 flex flex-col justify-center items-center text-Grey-700">
						{SAFEGUARD_LIST.card3.description}
					</div>
					<div className="col-start-1 col-span-1 row-start-2 flex flex-col justify-start items-center mobile:flex-row mobile:!col-span-2 mobile:justify-center">
						<Image
							src={jas}
							alt="JAS"
							width={200}
							height={100}
							className="object-contain w-auto mobile:w-[10rem]"
						/>
						<Image
							src={ingredients}
							alt="ingredients"
							width={200}
							height={80}
							className="object-fill w-auto mobile:w-[11rem]"
						/>
					</div>
					<div className="grid grid-rows-[auto_auto_auto_auto] gap-x-4 col-start-2 row-start-2 col-span-1 mobile:!col-span-2 mobile:!col-start-1 mobile:row-start-3 mobile:gap-y-4">
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
					<div className="col-start-1 col-span-1 row-start-1 row-span-1 mobile:col-start-1 mobile:col-span-2 mobile:row-start-3 mobile:row-span-2">
						{SAFEGUARD_LIST.card4.content}
					</div>
					<div className="col-start-2 col-span-1 row-start-1 row-span-1 flex flex-col justify-center mobile:col-start-1 mobile:col-span-2 mobile:row-start-1 mobile:row-span-2 mobile: place-items-center">
						<Image src={factory} alt="factory" width={200} height={100} />
					</div>
				</div>
			</KnowledgeCard>
		</div>
	);
}
