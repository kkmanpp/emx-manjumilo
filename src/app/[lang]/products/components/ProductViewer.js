"use client";
import ProductOverviewCard from "./ProductOverviewCard";
import { useRouter } from "next/navigation";

export default function ProductViewer({ productList, lang, dictionary }) {
  const router = useRouter();

  const handleOnClick = (sku) => {
    router.push(`/products/${sku}`);
  };
  // largeMobile:my-4 largeMobile:w-[30rem] tablet:w-[35rem]
  return (
    <div className="largeMobile:w-auto tablet:px-4 laptop:px-8 grid largeMobile:grid-cols-2 largeMobile:gap-4 grid-flow-row w-full grid-cols-1 gap-2">
      {productList.map((product) => (
        <ProductOverviewCard
          key={product.sku}
          product={product}
          lang={lang}
          onClick={() => handleOnClick(product.sku)}
        />
      ))}
    </div>
  );
}
