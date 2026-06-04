import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    let query = {};
    if (category) {
      query = { category };
    }
    
    const products = await Product.find(query).lean();
    
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error('[v0] Products API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const product = new Product(body);
    const savedProduct = await product.save();
    
    return NextResponse.json({ success: true, data: savedProduct }, { status: 201 });
  } catch (error) {
    console.error('[v0] Create product error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 400 }
    );
  }
}
