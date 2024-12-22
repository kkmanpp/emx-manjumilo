import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  // Validate required fields
  if (!name || !message) {
    return res.status(400).json({ message: "Name and message are required" });
  }

  // Ensure either email or phone is provided
  if (!email && !phone) {
    return res
      .status(400)
      .json({ message: "Either email or phone is required" });
  }

  try {
    console.log(process.env.SMTP_HOST);
    console.log(process.env.SMTP_PORT);
    console.log(process.env.SMTP_USER);
    console.log(process.env.SMTP_PASS);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
      },
    });
    console.log(`email: ${email}`);

    await transporter.sendMail({
      from: `"${name}" <${email || "no-reply@example.com"}>`, // sender address
      to: process.env.RECEIVER_EMAIL, // list of receivers
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
