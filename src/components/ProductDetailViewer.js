"use client";
import ProductDetailCard from "@/components/ProductDetailCard";
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

export default function ProductDetailViewer({ sku, lang, t }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    async function fetchProduct() {
      setError("");
      setProduct(null);
      startLoading();
      await fetch(`/api/products/${sku}`)
        .then((response) => response.json())
        .then((data) => setProduct(data.product))
        .catch((err) => setError("Failed to get data"));
      stopLoading();
    }
    fetchProduct();
  }, []);

  if (!product) return;
  if (!product.length) return <div>No Such Product</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <ProductDetailCard dictionary={t} lang={lang} product={product[0]} />
    </div>
  );
}
