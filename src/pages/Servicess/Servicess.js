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
  faDesktop,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ServiceDescription from "../../components/Services/ServiceDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const points = {
  left: [
    {
      title: "Microsoft Azure Services",
      subline: "From Greenfield to Enterprise-Grade—We Own the Cloud Journey.",
    },
    {
      title: "IaaS (Infrastructure as a Service)",
      subline:
        "Provision and manage secure, scalable VMs, virtual networks, firewalls, storage, and governance frameworks—built for performance and resilience",
    },
    {
      title: "PaaS (Platform as a Service)",
      subline:
        "Deploy apps and services faster with Azure App Services, Azure Functions, AKS (Kubernetes), and fully managed databases. We modernize legacy code into cloud-native stacks",
    },
    {
      title: "DevOps on Azure",
      subline:
        "CI/CD pipelines, GitHub Actions, Azure DevOps, infrastructure as code (Terraform/ARM/Bicep), automated testing—we bring speed and control to software delivery.",
    },
  ],
  right: [
    {
      title: "Lift-and-Shift Migrations",
      subline:
        "We move legacy workloads to Azure with zero data loss and minimal disruption. Proven migration blueprints for VMs, apps, databases, and even SAP.",
    },
    {
      title: "Hybrid Cloud Deployments",
      subline:
        "Extend your datacenter to Azure using Azure Arc, ExpressRoute, and site-to-site VPNs. Keep critical workloads on-prem while unlocking cloud elasticity.",
    },
    {
      title: "Backup & Disaster Recovery (DR)",
      subline:
        "Protect what matters with Azure Site Recovery, Geo-redundant storage, and automated failover strategies—fully tested and cost-optimized.",
    },
    {
      title: "Greenfield Cloud Projects",
      subline:
        "Starting from scratch? We build clean-slate cloud environments with zero technical debt, secured from day one, with CI/CD, monitoring, and automation baked in.",
    },
  ],
};
const microsoft365 = {
  left: [
    {
      title: "M365 Migration & Deployment",
      subline: "Seamless, zero-downtime migration from on-prem or other platforms (Google Workspace, legacy Exchange, etc.) with best-in-class setup and configuration.",
    },
    {
      title: "Identity & Access Management (IAM)",
      subline:
        "Secure user provisioning, Azure AD integration, SSO setup, MFA enforcement—your data stays in the right hands.",
    },
    {
      title: "Exchange Online & Outlook Configuration",
      subline:
        "Fast, reliable email systems with retention policies, hybrid setups, and smart mail flow rules for business continuity. We modernize legacy code into cloud-native stacks",
    },
    {
      title: "SharePoint Online & OneDrive for Business",
      subline:
        "Smart intranet and document management solutions that streamline collaboration, access control, and file governance.",
    },
  ],
  right: [
    {
      title: "Microsoft Teams Implementation",
      subline:
        "Collaboration reimagined. We configure Teams for departments, projects, external guests, and secure chat/video/file sharing.",
    },
    {
      title: "Security & Compliance Hardening",
      subline:
        "Implementation of Microsoft Purview, DLP, Intune MDM, Defender for M365, and compliance center policies to ensure zero risk operations.",
    },
    {
      title: "Power Platform Integration",
      subline:
        "Automate workflows and boost productivity with Power Automate, Power BI, and Power Apps—no-code to enterprise-grade.",
    },
    {
      title: "Licensing Optimization & Support",
      subline:
        "We help you choose the right plans, cut redundant costs, and ensure every license adds value.",
    },
  ],
};
const services = [
  {
    icon: faServer,
    title: "End-to-End Implementation Excellence",
    desc: `From  planning to deployment and optimization—we own every phase.`,
  },
  {
    icon: faShieldAlt,
    title: "Proven Cloud Strategy",
    desc: "We don’t just move workloads to Azure—we align them with your business goals, cost models, and security posture.",
  },
  {
    icon: faChartLine,
    title: "Business Reform",
    desc: "We propose feasible & practical plans for successfully transform businesses based on their needs.",
  },
  {
    icon: faSitemap,
    title: "100% Project Success Rate",
    desc: "Our track record? Every Azure engagement delivered with zero overruns and zero surprises.",
  },
  {
    icon: faLock,
    title: "Secure-by-Design",
    desc: "Every build includes zero-trust principles, role-based access, policy enforcement, encryption, and monitoring.",
  },
  {
    icon: faDesktop,
    title: "Cost Optimization Experts",
    desc: "We right-size your Azure spend—pay only for what drives value.",
  },
];

const ITServices = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".itservices-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener("scroll", handleScroll);
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
          subtitle="Build. Migrate. Secure. Scale. Repeat.At FTEB Tech LLC, we architect and execute cloud-first strategies that are secure, agile, and future-ready. From Azure to AWS to Google Cloud, we offer unmatched expertise across IaaS, PaaS, DevOps, Hybrid, and everything in between—delivering 100% project success across every deployment."
          points={points}
        />
        <ServiceDescription
          title="Microsoft 365 Services"
          subtitle="Empowering Productivity, Securing Collaboration — End-to-End.At FTEB Tech LLC, we specialize in end-to-end implementation and optimization of Microsoft 365 solutions, tailored to power modern workplaces. Whether you’re starting from scratch, migrating from legacy systems, or looking to enhance security and collaboration—we deliver 100% project success, every time."
          points={microsoft365}
        />
      </section>

      <div className="itservices-section">
        <div className="section-title">
          <span className="subtitle">WHAT WE OFFER</span>
          <h2>
            Transforming Businesses with <br />
            Advanced IT Solutions
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={true}
          speed={800}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="services-swiper"
        >
          {services.map((service, idx) => (
            <SwiperSlide
              key={idx}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? "0" : "20px"})`,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${
                  idx * 0.1
                }s`,
              }}
            >
              <div className="service-card">
                <div className="icon-container">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="service-icon"
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <span className="service-arrow">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-image">
            <img src={men} alt="Support Representative" />
          </div>
          <div className="contact-info-content">
            <div className="rating-value">4.9/5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">
              by 700+ customers for 3200+ clients
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Call for advice now!</div>
                <a href="tel:+971588481295" className="contact-value">
                  +971588481295
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="contact-text">
                <div className="contact-label">Say hello</div>
                <a href="mailto:Connect@ftebtech.com" className="contact-value">
                  Connect@ftebtech.com
                </a>
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
