const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shaikhsohail10m@gmail.com', // Your Gmail address
    pass: 'jpnu nkmy wzux odjk'  // Your Gmail App Password
  }
});

// Verify transporter connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('Error with email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// Helper function to verify reCAPTCHA token
const verifyRecaptcha = async (token) => {
  try {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: '6Le0-pkrAAAAAAshibhML7dOlXzExhCytl15IjrM',
        response: token
      }
    });
    return response.data.success;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
};

// Create HTML email template
const createEmailTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0056b3;">New Contact Form Submission</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Service Required:</strong> ${data.service}</p>
        ${data.budget ? `<p><strong>Budget Range:</strong> ${data.budget}</p>` : ''}
        <div style="margin-top: 20px;">
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
      <div style="color: #666; margin-top: 20px; font-size: 12px;">
        <p>This message was sent from the contact form on your website.</p>
      </div>
    </div>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, service, budget, message, token } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(token);
    if (!isRecaptchaValid) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed'
      });
    }

    // Configure email
    const mailOptions = {
      from: '"FTEB Contact Form" <shaikhsohail10m@gmail.com>',
      to: 'shaikhsohail10m@gmail.com', // Where you want to receive emails
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: createEmailTemplate(req.body)
    };

    // Send email
    await transporter.sendMail(mailOptions);

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});