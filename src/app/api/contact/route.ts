import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is not set. Simulating email send:", body);
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return NextResponse.json({ success: true, simulated: true });
    }

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Change to your verified domain when going to production
      to: ['contact@celestia-ai.ai'], // The email address to receive these messages
      subject: subject || `New Enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject || 'No subject'}

Message:
${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
