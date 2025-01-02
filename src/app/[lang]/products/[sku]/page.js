import { getDictionary } from "../../dictionaries";
import ProductDetailViewer from "@/components/ProductDetailViewer";

export async function generateMetadata({ params }) {
  const sku = (await params).sku;

  const product = await fetch(`${process.env.BASEURL}/api/products/${sku}`, {
    method: "GET",
  }).then((res) => res.json());

  return {
    title: product.product[0]?.name?.["cht"],
  };
}

export default async function Page({ params }) {
  const { sku, lang } = await params;
  const t = await getDictionary(lang);

  const product = await fetch(
    `${process.env.BASEURL}/api/products/${sku}`
  ).then((res) => res.json());

  return (
    <div className="laptop:w-[40rem]">
      <ProductDetailViewer t={t} lang={lang} product={product.product[0]} />
    </div>
  );
}
