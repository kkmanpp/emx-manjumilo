import { NextResponse } from "next/server";
import { getProductBySkuFromJson } from "@/lib/products";

export async function GET(req, { params }) {
  try {
    const { sku } = await params;

    if (!sku)
      return NextResponse.json(
        { error: "SKU parameter is missing" },
        { status: 400 }
      );

    const product = getProductBySkuFromJson(sku);
    console.log(product);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product: product });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred", details: error.message },
      { status: 500 }
    );
  }
}
