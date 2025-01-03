import ProductViewer from "./components/ProductViewer";
import { getDictionary } from "../dictionaries";
import { getProductsFromJson } from "@/lib/products";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const products = getProductsFromJson();

  return (
    <div>
      <ProductViewer dictionary={t} lang={lang} productList={products} />
    </div>
  );
}
