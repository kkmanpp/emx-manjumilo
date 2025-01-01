import ProductViewer from "@/components/ProductViewer";
import { getDictionary } from "../dictionaries";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  // console.log("t", t);
  return (
    <div>
      <ProductViewer dictionary={t} lang={lang} />
    </div>
  );
}
