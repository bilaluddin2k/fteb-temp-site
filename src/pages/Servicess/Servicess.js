import React, { useState, useEffect } from "react";
import "../../pages/Servicess/Servicess.css";
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
import ServiceDescription from "../../components/Services/ServiceDescription";

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
    <div>
    <PageWrapper />

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
      <section className="descriptions bg-light"> 
      <ServiceDescription
        title="Cloud Services – Azure, AWS, GCP"
        paragraphs={[
          "Build. Migrate. Secure. Scale. Repeat.",
          "At FTEB Tech LLC, we architect and execute cloud-first strategies that are secure, agile, and future-ready. From Azure to AWS to Google Cloud, we offer unmatched expertise across IaaS, PaaS, DevOps, Hybrid, and everything in between—delivering 100% project success across every deployment."
        ]}
        bulletPointsLeft={[
          "☁️ Microsoft Azure Services",
          "🔹 IaaS (Infrastructure as a Service)",
          "🔹 PaaS (Platform as a Service)",
          "🔹 DevOps on Azure"
        ]}
        bulletPointsRight={[
          "🔹 Lift-and-Shift Migrations",
          "🔹 Hybrid Cloud Deployments",
          "🔹 Backup & Disaster Recovery (DR)",
          "🔹 Greenfield Cloud Projects"
        ]}
        detailedServices={{
          "☁️ Microsoft Azure Services": "From Greenfield to Enterprise-Grade—We Own the Cloud Journey.",
          "🔹 IaaS (Infrastructure as a Service)": "Provision and manage secure, scalable VMs, virtual networks, firewalls, storage, and governance frameworks—built for performance and resilience.",
          "🔹 PaaS (Platform as a Service)": "Deploy apps and services faster with Azure App Services, Azure Functions, AKS (Kubernetes), and fully managed databases. We modernize legacy code into cloud-native stacks.",
          "🔹 DevOps on Azure": "CI/CD pipelines, GitHub Actions, Azure DevOps, infrastructure as code (Terraform/ARM/Bicep), automated testing—we bring speed and control to software delivery.",
          "🔹 Lift-and-Shift Migrations": "We move legacy workloads to Azure with zero data loss and minimal disruption. Proven migration blueprints for VMs, apps, databases, and even SAP.",
          "🔹 Hybrid Cloud Deployments": "Extend your datacenter to Azure using Azure Arc, ExpressRoute, and site-to-site VPNs. Keep critical workloads on-prem while unlocking cloud elasticity.",
          "🔹 Backup & Disaster Recovery (DR)": "Protect what matters with Azure Site Recovery, Geo-redundant storage, and automated failover strategies—fully tested and cost-optimized.",
          "🔹 Greenfield Cloud Projects": "Starting from scratch? We build clean-slate cloud environments with zero technical debt, secured from day one, with CI/CD, monitoring, and automation baked in."
        }}
        links={[]}
        brochureText={{ title: "", description: "" }}
      />
      </section>


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
                <a href="tel:+971588481295" className="contact-value">+971588481295</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Say hello</div>
                <a href="mailto:Connect@ftebtech.com" className="contact-value">Connect@ftebtech.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern-background"></div>
      </div>
    </div>
  );
};

export default ITServices;
