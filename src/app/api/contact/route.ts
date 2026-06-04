import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const contact = new Contact(body);
    const savedContact = await contact.save();
    
    return NextResponse.json(
      { success: true, data: savedContact, message: 'Thank you for contacting us!' },
      { status: 201 }
    );
  } catch (error) {
    console.error('[v0] Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save contact message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    const contacts = await Contact.find({}).lean().sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    console.error('[v0] Get contacts error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
