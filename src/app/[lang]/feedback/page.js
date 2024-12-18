import FeedbackViewer from "@/components/FeedbackViewer";
import { getDictionary } from "./../dictionaries";

export default async function Page({ params }) {
	const lang = (await params).lang;
	const t = await getDictionary(lang);
	const FEEDBACK_LIST = t.feedback;
	console.log(FEEDBACK_LIST);

	return (
		<div className="w-[50rem]">
			{FEEDBACK_LIST &&
				Object.keys(FEEDBACK_LIST).forEach((key, index) => {
					return (
						<FeedbackViewer
							customerName={FEEDBACK_LIST[`customer${index + 1}`]}
							reviewContent={FEEDBACK_LIST[`review${index + 1}`]}
						/>
					);
				})}
		</div>
	);
}
