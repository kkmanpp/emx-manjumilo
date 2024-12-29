"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TrendingProductViewer({ lang }) {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAllTrendingProducts() {
      setError("");
      setProductList(null);
      setLoading(true);
      await fetch("api/best-selling-products")
        .then((response) => response.json())
        .then((data) => setProductList(data.data))
        .catch((err) => setError("Failed to get data"))
        .finally(() => setLoading(false));
    }
    fetchAllTrendingProducts();
  }, []);

  if (!productList || loading)
    return (
      <div className="flex p-32 items-center justify-center">
        <Image src="/loading.gif" alt="Loading..." />
      </div>
    );
  if (error)
    return (
      <div className="text-red-600 flex flex-col items-center justify-center">
        {error}
      </div>
    );

  return <div>{productList.map((item, index) => {})}</div>;
}
