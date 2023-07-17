import connectMongoDB from "@/libs/mongodb";
import ProductCategory from "@/models/product/product_category";
import { NextResponse } from "next/server";

export async function POST(request){
    connectMongoDB();
    const data = await request.json()
    const response = await ProductCategory.create(data);
    return NextResponse.json({message:"Product category created successfully", data:response});
}