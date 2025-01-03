import { NextResponse } from "next/server";
import { getTrendingProductsFromJson } from "@/lib/products";

export async function GET() {
  try {
    const trendingProducts = getTrendingProductsFromJson();
    if (!trendingProducts) {
      return NextResponse.json(
        { error: "Trending Products not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: trendingProducts });
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred", details: error.message },
      { status: 500 }
    );
  }
}
