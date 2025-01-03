import Image from "next/image";
import Table from "@/components/Table";

export default function ProductDetailCard({ lang, product, dictionary }) {
	const t = dictionary.product;
	console.log("product:", product);
	return (
		<div className="grid grid-rows-[auto_auto] gap-4 bg-white rounded-2xl shadow-lg p-4 dark:text-Grey-900  mobile:rounded-none">
			<div className="grid grid-cols-2 gap-x-4">
				<div
					className={`grid grid-flow-row gap-2 items-align ${
						product?.image?.length !== 1
							? "grid-cols-2"
							: "grid-cols-1 justify-self-center"
					}`}
				>
					{product?.image?.map((product, index) => {
						return (
							<div key={index} className="w-[auto">
								<Image src={product} width={150} height={300} alt="product" />
							</div>
						);
					})}
				</div>
				<div className="flex flex-col gap-y-2">
					<div className="font-bold text-p2 dark:text-Grey-900">
						{product?.name[lang]}
					</div>
					{product.slogan && <div className="mb-4">{product.slogan[lang]}</div>}
					<div>{t.size}:</div>
					<div className="flex flex-row gap-x-4 ">
						{product.size.map((product, index) => {
							return (
								<div
									className="border rounded-xl border-Green-600 bg-[#e0ece8] dark: text-Grey-900 p-2"
									key={index}
								>
									{product[lang]}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div>
				<div className="my-4">
					<div className="font-semibold">{t.description}</div>
					<div>{product.description[lang]}</div>
				</div>
				<div className="my-4">
					<div className="font-semibold">{t.ingredients}</div>
					<div>{product.ingredients[lang]}</div>
				</div>
				{product.directions[lang] && (
					<div className="my-4">
						<div className="font-semibold">{t.directions}</div>
						<div>{product.directions[lang]}</div>
					</div>
				)}
				{product.nutrition_key[lang] && (
					<div className="my-4">
						<div className="font-semibold">{t.nutrition}</div>
						<div>
							<Table
								title={product.per_unit_contains[lang]}
								name={product.nutrition_key[lang]}
								value={product.nutrition_value[lang]}
							/>
						</div>
					</div>
				)}
				{product.suitable_for[lang] && (
					<div className="">
						<div className="font-semibold my-2">{t.suitable_for}</div>
						<div>{product.suitable_for[lang]}</div>
					</div>
				)}
				{product.advisory_info[lang] && (
					<div className="text-p5 text-Grey-600 mt-4">
						<div className="font-semibold ">{t.advisory_info}</div>
						<div>{product.advisory_info[lang]}</div>
					</div>
				)}
				{product.reminder[lang] && (
					<div className="text-p5 text-Grey-600 mt-4">
						<div className="font-semibold">{t.reminder}</div>
						<div>{product.reminder[lang]}</div>
					</div>
				)}
			</div>
		</div>
	);
}
