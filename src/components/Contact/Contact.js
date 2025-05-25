"use client"

import { useState, useEffect } from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMapMarkerAlt, 
  faPhoneAlt, 
  faEnvelope, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [recaptchaToken, setRecaptchaToken] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Load reCAPTCHA script
  useEffect(() => {
    const scriptId = "recaptcha-script"
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit"
      script.async = true
      script.defer = true
      document.body.appendChild(script)
      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            window.grecaptcha.render("recaptcha-container", {
              sitekey: "6LcutUcrAAAAACsSigyJ-tiJbYyLtb2aLgkAqcg7", // Replace with your site key
              callback: (token) => {
                setRecaptchaToken(token)
              },
              "expired-callback": () => {
                setRecaptchaToken("")
              }
            })
          })
        }
      }
    }
  }, [])

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      content: "AG house, sala al din, dubai, UAE",
    },
    {
      icon: faPhoneAlt,
      title: "Call Us",
      content: +971588481295,
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      content: "Connect@ftebtech.com",
      isEmail: true,
    },
  ]

  const socialLinks = [
 
  
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com/company/mitech",
      label: "Follow us on LinkedIn"
    },
  
  ]

  return (
    <section className="contact section bg-light">
      <div className="container">
        <div className="section-title">
          <h6>CONTACT US</h6>
          <h2>Get in Touch</h2>
          <p className="para">Have questions or need assistance? Our team is here to help you with any inquiries.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-infos">
            <h3>Contact Information</h3>

            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-item">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.isEmail ? (
                      <p>
                        <a 
                          href={`mailto:${info.content}` }
                          className="email-link"
                          title="Click to send email"
                        >
                          {info.content}
                        </a>
                      </p>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-iconss">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <form 
              className="contact-form" 
              action="https://formsubmit.co/YOUR_EMAIL_HERE" 
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="g-recaptcha-response" value={recaptchaToken} />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div id="recaptcha-container" className="g-recaptcha"></div>
              <button type="submit" className="btn btn-primary" disabled={!recaptchaToken}>
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
