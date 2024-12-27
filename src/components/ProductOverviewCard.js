import Image from "next/image";

export default function ProductOverviewCard({ lang, product, onClick }) {
	return (
		<div
			className="rounded-xl p-4 shadow-md overflow-hidden flex flex-col bg-white items-center cursor-pointer"
			onClick={onClick}
		>
			<div className="w-[auto]">
				<Image src={product.image[0]} alt="product" height={200} width={200} />
			</div>
			<div>
				<div className="font-bold text-center">{product.name[lang]}</div>
				<div className="my-2 text-Grey-700">{product.slogan[lang]}</div>
			</div>
		</div>
	);
}
