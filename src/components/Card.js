import LinkButton from "./LinkButton";
import Image from "next/image";

export default function Card({
	title,
	image,
	primaryDesc,
	subTitle,
	secondaryDesc,
}) {
	return (
		<div className="grid grid-cols-1 grid-rows-[2rem_1fr_1fr_auto] items-center justify-center rounded-xl shadow-lg m-2">
			<div className="bg-Green-50 text-Green-700 text-center h-full font-medium flex items-center justify-center">
				<div>{title}</div>
			</div>
			<div>
				<Image src={image} height={300} alt={title} className="w-full" />
			</div>
			<div className="text-Grey-800 text-start p-4">
				<div>{primaryDesc}</div>
				<div className="pt-4">
					<div>{subTitle}</div>
					{secondaryDesc.length &&
						secondaryDesc.map((text) => {
							return <div className="px-4">{text}</div>;
						})}
				</div>
			</div>
			<div className="grid grid-cols-[2fr_1fr]">
				<div className="col-start-2 flex flex-col justify-end">
					<LinkButton
						label="More"
						onClick={console.log("press button")}
					></LinkButton>
				</div>
			</div>
		</div>
	);
}
