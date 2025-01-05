import FeedbackViewer from "./components/FeedbackViewer";
import { getDictionary } from "../dictionaries";

export default async function Page({ params }) {
  const lang = (await params).lang;
  console.log("lang:", lang);
  const t = await getDictionary(lang);
  console.log("t:", t);
  const FEEDBACK_LIST = t.feedback;
  console.log(FEEDBACK_LIST);
  console.log(Object.keys(FEEDBACK_LIST));

  return (
    <div className=" w-full max-w-screen-lg mx-auto my-4 px-0 mt-0 tablet:p-4 laptop:w-[65rem]  ">
      {Object.keys(FEEDBACK_LIST).map((key, index) => {
        return (
          <FeedbackViewer
            key={key}
            customerName={FEEDBACK_LIST[key].customer}
            reviewContent={FEEDBACK_LIST[key].review}
          />
        );
      })}
      <div className="text-red-600 text-center pt-4">{t.reminder}</div>
    </div>
  );
}
