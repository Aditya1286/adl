import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify transporter configuration on startup
transporter.verify((error) => {
  if (error) {
    console.log("❌ Email configuration error:", error.message);
    console.log("📧 Email User:", process.env.EMAIL_USER || "NOT SET");
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

export const sendContactEmail = async (req, res) => {
  const { name, email, company, service, message } = req.body;

  if (!name || !email || !company || !service || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const mailOptionsToAdmin = {
    from: process.env.EMAIL_USER,
    to: "contact.eliteadvisers@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #0C2B4E;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #0C2B4E;">
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service Interested In:</strong> ${service}</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
        <hr style="border: 1px solid #0C2B4E; margin-top: 20px;">
        <p style="color: #666; font-size: 12px;">This email was sent from your website contact form.</p>
      </div>
    `,
  };

  const mailOptionsToCustomer = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting Elite Advisers",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #0C2B4E;">Thank You for Reaching Out!</h2>
        <hr style="border: 1px solid #0C2B4E;">
        <p>Dear ${name},</p>
        <p>Thank you for contacting Elite Advisers. We have received your message regarding <strong>${service}</strong>.</p>
        <p>Our team will review your inquiry and get back to you within 24-48 hours.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Your Message:</strong></p>
          <p>${message}</p>
        </div>
        <p>If you have any urgent questions, feel free to contact us directly at:</p>
        <ul>
          <li><strong>Email:</strong> contact.eliteadvisers@gmail.com</li>
          <li><strong>Phone:</strong> +99 021 324 258</li>
          <li><strong>Address:</strong> Sector 13 Dwarka, New Delhi, India</li>
        </ul>
        <p>Best regards,<br><strong>Elite Advisers Team</strong></p>
        <hr style="border: 1px solid #0C2B4E; margin-top: 20px;">
        <p style="color: #666; font-size: 12px;">This is an automated response. Please do not reply to this email.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptionsToAdmin);
    await transporter.sendMail(mailOptionsToCustomer);
    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: error.message,
    });
  }
};


