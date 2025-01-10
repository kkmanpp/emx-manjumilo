import { getDictionary } from "../../dictionaries";
import ProductDetailViewer from "./components/ProductDetailViewer";
import { getProductBySku } from "@/lib/products";

export async function generateMetadata({ params }, parent) {
  const { sku, lang } = await params;
  const product = await getProductBySku(sku);
  const parentMetadata = await parent;
  const previousImages = parentMetadata?.openGraph?.images || [];

  const productImage = Array.isArray(product.image)
    ? product.image[0].url
    : product.image.url;

  return {
    title: product?.name?.[lang],
    openGraph: {
      images: [productImage, ...previousImages],
    },
  };
}

export default async function Page({ params }) {
  const { sku, lang } = await params;
  const t = await getDictionary(lang);

  const product = await getProductBySku(sku);

  return (
    <div className="w-full laptop:w-[40rem] flex flex-col justify-center items-center">
      <ProductDetailViewer t={t} lang={lang} product={product} />
    </div>
  );
}
