import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, feedback } = await req.json();

    // Validate required fields
    if (!name || !feedback) {
      return NextResponse.json(
        { message: "Name and feedback are required" },
        { status: 400 }
      );
    }

    // Ensure either email or phone is provided
    if (!email && !phone) {
      return NextResponse.json(
        { message: "Either email or phone is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email || "no-reply@example.com"}>`, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nFeedback: ${feedback}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
