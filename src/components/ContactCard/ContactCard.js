import React, { useState, useEffect } from "react";
import "./ContactCard.css";
import contactGuy from "../../assets/contact-guy.png";

const ContactCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.contact-card-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="contact-card-section">
      <div 
        className="contact-card-container"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <div className="contact-card-image-wrapper">
          <img src={contactGuy} alt="IT Advisor" className="contact-card-image" />
          <div className="image-overlay">
            <i className="fas fa-user-tie overlay-icon"></i>
          </div>
        </div>
        <div className="contact-card-info">
          <div className="contact-card-rating">
            <h2 className="contact-card-score">
              <i className="fas fa-star score-icon"></i> 4.9/5.0
            </h2>
            <div className="contact-card-stars">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <i 
                  key={index} 
                  className="fas fa-star"
                  style={{
                    animation: `starPulse 1.5s ${index * 0.2}s infinite`,
                    color: '#007bff'
                  }}
                ></i>
              ))}
            </div>
            <p className="contact-card-customers">
              <i className="fas fa-users customer-icon"></i>
              by 700+ customers for 3200+ clients
            </p>
          </div>
          <div className="contact-card-contact">
            <div 
              className="contact-card-row"
              onMouseEnter={() => setHoveredIcon('phone')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="contact-icon-wrapper phone-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <div className="contact-card-label">
                  <i className="fas fa-headset label-icon"></i> CALL FOR ADVICE NOW!
                </div>
                <a href="tel:190068668" className="contact-card-link phone">
                  <i className="fas fa-phone-volume link-icon"></i> 1900 68668
                </a>
              </div>
            </div>
            <div 
              className="contact-card-row"
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className="contact-icon-wrapper email-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <div className="contact-card-label">
                  <i className="fas fa-paper-plane label-icon"></i> SAY HELLO
                </div>
                <a href="mailto:hello@mitech.com" className="contact-card-link email">
                  <i className="fas fa-envelope-open-text link-icon"></i> hello@mitech.com
                </a>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-card-bgmap"></div>
    </section>
  );
};

export default ContactCard;
