import ProductViewer from "./components/ProductViewer";
import { getDictionary } from "../dictionaries";
import { getProducts } from "@/lib/products";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const products = await getProducts();

  return (
    <div className="flex flex-col justify-center items-center my-0 w-full largeMobile:my-4">
      <ProductViewer dictionary={t} lang={lang} productList={products} />
    </div>
  );
}
