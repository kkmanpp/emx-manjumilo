import { getDictionary } from "../../dictionaries";
import ProductDetailViewer from "./components/ProductDetailViewer";
import { getProductBySkuFromJson } from "@/lib/products";

export async function generateMetadata({ params }) {
  const sku = (await params).sku;

  // const product = await fetch(`${process.env.BASEURL}/api/products/${sku}`, {
  //   method: "GET",
  // }).then((res) => res.json());
  const product = getProductBySkuFromJson(sku);

  return {
    title: product?.name?.["cht"],
    openGraph: {
      images: [product.images],
    },
  };
}

export default async function Page({ params }) {
  const { sku, lang } = await params;
  const t = await getDictionary(lang);

  const product = getProductBySkuFromJson(sku);

  return (
    <div className="w-full laptop:w-[40rem] flex flex-col justify-center items-center">
      <ProductDetailViewer t={t} lang={lang} product={product} />
    </div>
  );
}
