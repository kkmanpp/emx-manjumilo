import { NextResponse } from "next/server";
import products from "@/products.json";

export async function GET() {
  const trendingProducts = products.filter(
    (item) => item.is_hot_sale_item === true
  );
  return NextResponse.json({ data: trendingProducts });
}
