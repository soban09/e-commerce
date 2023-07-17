import connectMongoDB from "@/libs/mongodb";
import ProductCategory from "@/models/product/product_category";
import Product from "@/models/product/product";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    connectMongoDB()
    const {category} = params;
    const Category = await ProductCategory.findOne({name: category})
    const category_id = Category._id;
    const products = await Product.findOne({category_id: category_id});
    return NextResponse.json({message: "Record fetched Successfully", products})
}