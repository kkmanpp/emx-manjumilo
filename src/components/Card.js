import LinkButton from "./LinkButton";
import Image from "next/image";
import Link from "next/link";
export default function Card({ title, image, primaryDesc, label, path }) {
	return (
		<div className="grid grid-cols-1 grid-rows-[2rem_10rem_1fr_4rem] justify-center rounded-xl shadow-lg m-2 bg-white mobile:m-0 mobile:rounded-none">
			<div className="bg-Green-50 text-Green-700 text-center h-full font-medium flex items-center justify-center">
				<div>{title}</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<Image
					src={image}
					width={200}
					height={300}
					alt={title}
					className="w-[13rem] h-[8rem] object-contain mobile:w-[15rem] mobile:h-[10rem]"
				/>
			</div>
			<div className="text-Grey-800 p-4 mobile:p-2">
				<div className="flex flex-row justify-start">{primaryDesc}</div>
			</div>
			<div className="grid grid-cols-[2fr_1fr] p-4">
				<div className="col-start-2 flex flex-col items-end justify-center text-Green-700 m-2">
					<Link href={path} className="underline underline-offset-2">
						{label}
					</Link>
				</div>
			</div>
		</div>
	);
}
