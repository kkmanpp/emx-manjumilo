import { NextResponse } from "next/server";
import products from "@/products.json";

export async function GET(req, { params }) {
  const { sku } = await params;
  const product = products.filter((item) => item.sku === sku);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ product: product });
}
