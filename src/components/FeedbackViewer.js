import Image from "next/image";
import customerAccount from "./../../public/customer.png";

export default function FeedbackViewer({ customerName, reviewContent }) {
	return (
		<div className="grid grid-cols-[auto_1fr] items-center justify-center rounded-xl shadow-lg m-2 w-full bg-white mobile:mx-0 mobile:mb-2 mobile:mt-0 mobile:rounded-none">
			<div className="flex flex-col self-start p-4 mobile:p-2">
				<Image src={customerAccount} alt="customer" height={50} width={50} />
			</div>
			<div className="m-4">
				<div className="text-Green-500 mb-2">{customerName}</div>
				<div className="text-Grey-900 dark:text-Grey-900">{reviewContent}</div>
			</div>
		</div>
	);
}
