import Image from "next/image";
import customerAccount from "./../../public/customer.png";

export default function FeedbackViewer({ customerName, reviewContent }) {
	return (
		<div className="grid grid-cols-[auto_1fr] items-center justify-center rounded-xl shadow-lg m-2 bg-white">
			<div className="flex flex-col self-start p-4">
				<Image src={customerAccount} alt="customer" height={50} width={50} />
			</div>
			<div className="m-4">
				<div className="text-Green-500 mb-2">{customerName}</div>
				<div>{reviewContent}</div>
			</div>
		</div>
	);
}
