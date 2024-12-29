import { NextResponse } from "next/server";
import products from "./../../products.json";

export default async function handler(req, res) {
	return res.status(200).json({
		products: products,
	});
}
