import React, { useState, useEffect } from "react";
import "./ITServices.css";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import men from "../../assets/men.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faServer, 
  faShieldAlt, 
  faChartLine, 
  faSitemap, 
  faLock, 
  faDesktop 
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faServer,
    title: "IT Management",
    desc: `It's possible to simultaneously manage and transform information from one server to another.`,
  },
  {
    icon: faShieldAlt,
    title: "Data Security",
    desc: "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  },
  {
    icon: faChartLine,
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs.",
  },
  {
    icon: faSitemap,
    title: "Infrastructure Plan",
    desc: "Mitech takes into account all conditions and budgets needed for building infrastructure plan.",
  },
  {
    icon: faLock,
    title: "Firewall Advance",
    desc: "Enhancing the strength and security of firewalls to protect online data from malicious sources.",
  },
  {
    icon: faDesktop,
    title: "Desktop Computing",
    desc: "Programming is taken care of by our experienced and professional specialist in IT management.",
  },
];

const ITServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.itservices-section');
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
    <PageWrapper>
      <div className="itservices-hero-bg">
        <div className="itservices-hero-content">
          <h1 className="itservices-title">IT Services</h1>
          <div className="itservices-breadcrumb">
            <span>Home</span>
            <span className="breadcrumb-sep">/</span>
            <span>IT Services</span>
          </div>
        </div>
        <div className="itservices-hero-pattern"></div>
      </div>

      <div className="itservices-section">
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              className="service-card"
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? '0' : '20px'})`,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.1}s`
              }}
            >
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="service-icon"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span 
                className="service-arrow"
                style={{
                  transform: hoveredIndex === idx ? 'translateX(5px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease'
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-image">
            <img src={men} alt="Support Representative" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">
              ★★★★★
            </div>
            <div className="rating-text">by 700+ customers for 3200+ clients</div>
              <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Call for advice now!</div>
                <a href="tel:1900 68668" className="contact-value">1900 68668</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Say hello</div>
                <a href="mailto:hello@mitech.com" className="contact-value">hello@mitech.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern-background"></div>
      </div>
    </PageWrapper>
  );
};

export default ITServices;
