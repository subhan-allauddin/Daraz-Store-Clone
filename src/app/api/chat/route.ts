import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/lib/models/Product';

async function generateAIResponse(userMessage: string, context: any) {
  // Simple AI response logic - in production, use Vercel AI SDK
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('product') || lowerMessage.includes('item')) {
    if (context.products.length > 0) {
      const productList = context.products
        .slice(0, 3)
        .map((p: any) => `${p.name} ($${p.price})`)
        .join(', ');
      return `We have several great products available: ${productList}. Would you like to know more about any of them?`;
    }
    return 'We have a wide range of premium products available. What type of product are you interested in?';
  }
  
  if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    if (context.products.length > 0) {
      const avgPrice = (context.products.reduce((sum: number, p: any) => sum + p.price, 0) / context.products.length).toFixed(2);
      return `Our products range from $${Math.min(...context.products.map((p: any) => p.price))} to $${Math.max(...context.products.map((p: any) => p.price))}. Average price is around $${avgPrice}.`;
    }
    return 'Our products are competitively priced. Feel free to browse our catalog for specific pricing.';
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
    return 'You can reach us at info@nadiastore.com or call +1 (555) 123-4567. Our store is located at 123 Store Street, City, State 12345.';
  }
  
  if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
    return 'I can help you with: product information, pricing, contact details, store hours, and more. What would you like to know?';
  }
  
  return 'Thank you for your question! I can help you with product information, pricing, contact details, and more. Feel free to ask me anything about Nadia Store.';
}

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    await dbConnect();
    
    // Fetch products for context
    const products = await Product.find({}).select('name price category').lean().limit(10);
    
    const userMessage = messages[messages.length - 1];
    
    if (!userMessage || userMessage.role !== 'user') {
      return NextResponse.json(
        { error: 'Last message must be from user' },
        { status: 400 }
      );
    }

    const context = {
      products,
      storeName: 'Nadia Store',
      storeEmail: 'info@nadiastore.com',
      storePhone: '+1 (555) 123-4567',
    };

    const response = await generateAIResponse(userMessage.content, context);

    return NextResponse.json({ 
      response,
      success: true,
    });
  } catch (error) {
    console.error('[v0] Chat API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process chat message',
        response: 'Sorry, I encountered an error. Please try again later.',
      },
      { status: 500 }
    );
  }
}
