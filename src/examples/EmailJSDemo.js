import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailJSDemo = () => {
    const [status, setStatus] = useState('');
    
    // Simple email sending function
    const sendTestEmail = async () => {
        try {
            setStatus('Sending...');
            
            // Example template parameters
            const templateParams = {
                to_name: 'Recipient',
                from_name: 'Sender',
                message: 'This is a test email from EmailJS!',
                reply_to: 'sender@example.com'
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                'your_service_id',    // Gmail service ID
                'your_template_id',   // Email template ID
                templateParams,
                'your_public_key'     // Your public key
            );

            if (response.status === 200) {
                setStatus('Email sent successfully!');
            }

        } catch (error) {
            setStatus('Failed to send email: ' + error.message);
        }
    };

    return (
        <div className="emailjs-demo">
            <h2>EmailJS Demo</h2>
            
            {/* Simple form to demonstrate email sending */}
            <div className="demo-form">
                <h3>How EmailJS Works:</h3>
                <ol>
                    <li>Create an EmailJS account</li>
                    <li>Set up an email service (e.g., Gmail)</li>
                    <li>Create an email template</li>
                    <li>Use the EmailJS SDK to send emails</li>
                </ol>

                <h3>Benefits:</h3>
                <ul>
                    <li>No backend required</li>
                    <li>Works with multiple email services</li>
                    <li>Customizable templates</li>
                    <li>Secure email sending</li>
                </ul>

                <button onClick={sendTestEmail}>
                    Send Test Email
                </button>
                
                {status && <p className="status">{status}</p>}
            </div>

            {/* Example template structure */}
            <div className="template-example">
                <h3>Example Template Structure:</h3>
                <pre>
                    {`Subject: New Contact Form Submission

Dear {{to_name}},

You received a message from {{from_name}}:

Message: {{message}}

Reply to: {{reply_to}}

Best regards,
Your Website`}
                </pre>
            </div>
        </div>
    );
};

export default EmailJSDemo;
