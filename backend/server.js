const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
const tokenManager = require('./utils/tokenManager');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['https://ftebtech.com', 'http://localhost:3000'],
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Function to create transporter with current access token
const createTransporter = async () => {
  const accessToken = await tokenManager.getValidToken();
  return nodemailer.createTransport({
    service: "hotmail", // Works for Office 365 / Outlook
    auth: {
      type: "OAuth2",
      user: process.env.OFFICE365_USER,
      clientId: process.env.OFFICE365_CLIENT_ID,
      clientSecret: process.env.OFFICE365_SECRET,
      tenantId: process.env.OFFICE365_TENANT_ID,
      refreshToken: process.env.OFFICE365_REFRESH_TOKEN,
      accessToken: accessToken
    }
  });
};
 
// Function to verify transporter connection
const verifyTransporter = async () => {
  try {
    const transporter = await createTransporter();
    await transporter.verify();
    console.log('Email server is ready to send messages');
    return true;
  } catch (error) {
    console.error('Error with email server:', error);
    return false;
  }
};



// Create HTML email template
const createEmailTemplate = (data) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f6f9fc;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0056b3 0%, #00438a 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
          <p style="color: #e6f0ff; margin: 10px 0 0; font-size: 14px;">Received on ${new Date().toLocaleString()}</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
          <!-- Contact Information Section -->
          <div style="background-color: #f8faff; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
            <h2 style="color: #0056b3; margin: 0 0 20px; font-size: 20px; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">
              Contact Details
            </h2>
            <div style="display: grid; gap: 15px;">
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Full Name</span><br>
                <strong style="color: #333; font-size: 16px;">${data.firstName} ${data.lastName}</strong></p>
              </div>
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Email Address</span><br>
                <strong style="color: #333; font-size: 16px;">${data.email}</strong></p>
              </div>
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Phone Number</span><br>
                <strong style="color: #333; font-size: 16px;">${data.phone}</strong></p>
              </div>
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Company</span><br>
                <strong style="color: #333; font-size: 16px;">${data.company}</strong></p>
              </div>
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Service Required</span><br>
                <strong style="color: #333; font-size: 16px;">${data.service}</strong></p>
              </div>
              ${data.budget ? `
              <div style="padding: 10px; background-color: #ffffff; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <p style="margin: 0;"><span style="color: #666; font-size: 14px;">Budget Range</span><br>
                <strong style="color: #333; font-size: 16px;">${data.budget}</strong></p>
              </div>
              ` : ''}
            </div>
          </div>

          <!-- Message Section -->
          <div style="background-color: #f8faff; border-radius: 8px; padding: 25px;">
            <h2 style="color: #0056b3; margin: 0 0 20px; font-size: 20px; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">
              Message Content
            </h2>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <p style="margin: 0; white-space: pre-wrap; color: #333; line-height: 1.8;">${data.message}</p>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f8faff; padding: 20px; text-align: center; border-top: 1px solid #e1e8f0;">
          <p style="color: #666; margin: 0; font-size: 13px;">This is an automated message from your website's contact form.</p>
          <p style="color: #0056b3; margin: 10px 0 0; font-size: 13px;">© ${new Date().getFullYear()} FTEB Tech. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, service, budget, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Configure email
    const mailOptions = {
      from: '"FTEB Tech" <connect@ftebtech.com>',
      to: 'connect@ftebtech.com', // Where you want to receive emails
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: createEmailTemplate(req.body)
    };

    // Get fresh transporter and send email
    try {
      const transporter = await createTransporter();
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      throw new Error('Failed to send email. Please try again later.');
    }

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Initialize token manager and start the server
const startServer = async () => {
  try {
    // Initialize token manager
    await tokenManager.initialize();
    console.log('Token manager initialized successfully');

    // Verify email transport
    const isEmailReady = await verifyTransporter();
    if (!isEmailReady) {
      throw new Error('Email transport verification failed');
    }

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server initialization failed:', error);
    process.exit(1);
  }
};

// Start the server
startServer();