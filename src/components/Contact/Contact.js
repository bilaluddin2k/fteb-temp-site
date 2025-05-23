"use client"

import { useState, useRef } from "react"
import "./Contact.scss"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import { EMAILJS_CONFIG } from '../../config/email'
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
  const form = useRef()
  const recaptchaRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [recaptchaValue, setRecaptchaValue] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    if (!recaptchaValue) {
      setError("Please complete the reCAPTCHA verification")
      setLoading(false)
      return
    }

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setSuccess("Message sent successfully!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      recaptchaRef.current.reset()
      setRecaptchaValue(null)
    } catch (error) {
      setError("Failed to send message. Please try again.")
      console.error("EmailJS error:", error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: faMapMarkerAlt,
      title: "Visit Us",
      content: "58 Howard Street #2 San Francisco, CA 94105",
    },
    {
      icon: faPhoneAlt,
      title: "Call Us",
      content: "+1 (0122) 8899900",
    },
    {
      icon: faEnvelope,
      title: "Email Us",
      content: "info@mitech.com",
      isEmail: true,
    },
  ]

  const socialLinks = [
    {
      icon: faFacebookF,
      url: "https://facebook.com/mitech",
      label: "Follow us on Facebook"
    },
    {
      icon: faTwitter,
      url: "https://twitter.com/mitech",
      label: "Follow us on Twitter"
    },
    {
      icon: faLinkedinIn,
      url: "https://linkedin.com/company/mitech",
      label: "Follow us on LinkedIn"
    },
    {
      icon: faInstagram,
      url: "https://instagram.com/mitech",
      label: "Follow us on Instagram"
    }
  ]

  return (
    <section className="contact section bg-light">
      <div className="container">
        <div className="section-title">
          <h6 className="titless">CONTACT US</h6>
          <h2>Get in Touch</h2>
          <p className="para">Have questions or need assistance? Our team is here to help you with any inquiries.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-infos">
            <h3>Contact Information</h3>
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div className="info-item" key={index}>
                  <div className="icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="info-content">
                    <h6>{info.title}</h6>
                    {info.isEmail ? (
                      <a href={`mailto:${info.content}`}>{info.content}</a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            {error && <div className="alert alert-error">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <div className="form-group">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={EMAILJS_CONFIG.RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
