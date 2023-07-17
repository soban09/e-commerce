import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product/product";
import { NextResponse } from "next/server";

export async function POST(request){
    connectMongoDB();
    const data = await request.json()
    const response = await Product.create(data);
    return NextResponse.json({message:"Product category created successfully", data:response});
}