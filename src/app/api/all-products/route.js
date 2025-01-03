import { NextResponse } from "next/server";
import { getProductsFromJson } from "@/lib/products";

export async function GET() {
  try {
    const products = getProductsFromJson();
    if (!products) {
      return NextResponse.json(
        { error: "Products not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      products: products,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred", details: error.message },
      { status: 500 }
    );
  }
}
