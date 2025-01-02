import ProductViewer from "./components/ProductViewer";
import { getDictionary } from "../dictionaries";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const products = await fetch(`${process.env.BASEURL}/api/all-products`).then(
    (res) => res.json()
  );

  return (
    <div>
      <ProductViewer
        dictionary={t}
        lang={lang}
        productList={products.products}
      />
    </div>
  );
}
