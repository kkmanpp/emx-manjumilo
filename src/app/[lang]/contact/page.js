import ContactForm from "./components/ContactForm";
import { getDictionary } from "../dictionaries";

export default async function Contact({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return (
    <div className="tablet:p-4">
      <ContactForm t={t} />
    </div>
  );
}
