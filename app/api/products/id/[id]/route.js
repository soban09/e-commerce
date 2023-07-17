import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product/product";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    connectMongoDB()
    const {id} = params;
    const product = await Product.findById(id);
    return NextResponse.json({message: "Record fetched Successfully", product})
}