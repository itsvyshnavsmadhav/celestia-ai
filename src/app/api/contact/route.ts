import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    let transporter;

    // If SMTP credentials are provided, use them
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    } else {
      // Fallback for development/testing when no .env is setup
      console.warn("⚠️ SMTP credentials missing. Using Ethereal Email for testing.");
      const testAccount = await nodemailer.createTestAccount();
      
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailOptions = {
      from: `"Contact Form" <${SMTP_USER || 'test@ethereal.email'}>`,
      to: 'contact@celestia-ai.ai',
      replyTo: email,
      subject: subject ? `Contact Form: ${subject}` : `New Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    
    // Log Ethereal URL if using test account
    if (!SMTP_HOST) {
      console.log("=========================================");
      console.log("✉️  Email sent via Ethereal (Test Server)");
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      console.log("=========================================");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
