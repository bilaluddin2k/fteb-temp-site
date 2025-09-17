import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import eresourceLogo from '../../assets/images/ProductLogos/erosource.png';

const EresourceServices = () => {
  const serviceData = {
    title: "Eresource Enterprise Solutions",
    subtitle: "Advanced ERP & Business Intelligence Platform",
    description: "Transform your business operations with Eresource's comprehensive enterprise resource planning and business intelligence solutions. Streamline processes, gain insights, and drive data-driven decisions.",
    logo: eresourceLogo,
    heroGradient: "linear-gradient(135deg, rgb(14 178 240) 0%, rgb(17 179 240) 100%)",
    
    stats: [
      { number: "150+", label: "ERP Implementations" },
      { number: "95%", label: "Process Efficiency" },
      { number: "60%", label: "Decision Speed" }
    ],

    services: [
      {
        title: "Excel Manufacturing ERP",
        description: "Unified platform for managing all manufacturing and production processes.",
      },
      {
        title: "Bro ERP (Process Manufacturing)",
        description: "CGMP, FDA & 21CFR compliant ERP for batch and process industries.",
      },
      {
        title: "NFRA ERP (Construction & Contracting)",
        description: "Tailored ERP for construction and project-based industries.",
      },
      {
        title: "3GL ERP (Transport & Fleet)",
        description: "Controls fleet costs, maintenance, and maximizes utilization.",
      },
      {
        title: "ETrade ERP (Trading & Distribution)",
        description: "Supports global trading and distribution operations.",
      },
      {
        title: "Rental Management ERP",
        description: "Complete solution for leasing and rental businesses.",
      },
      {
        title: "CRM 360 Solution",
        description: "Streamlines customer relationship management processes.",
      },
      {
        title: "HRMS 360",
        description: "End-to-end HR and payroll management from hire to retire.",
      },
      {
        title: "FreightX ERP",
        description: "Cloud-based ERP for logistics, freight forwarding, 3PL, and multimodal operations.",
      },
     

    ],

    benefits: [
      {
        title: "Streamlined Operations",
        description: "Integrate all business processes into a single platform for improved efficiency and visibility."
      },
      {
        title: "Data-Driven Decisions",
        description: "Make informed decisions with real-time analytics and comprehensive business intelligence."
      },
      {
        title: "Scalable Solution",
        description: "Grow your business with a platform that scales with your needs and requirements."
      },
      {
        title: "Industry Expertise",
        description: "Benefit from industry-specific solutions and best practices tailored to your sector."
      }
    ],

    process: [
      {
        step: "01",
        title: "Business Analysis",
        description: "Comprehensive analysis of business processes, requirements, and existing systems."
      },
      {
        step: "02",
        title: "Solution Design",
        description: "Design customized ERP solution with modules and features aligned to business needs."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Phased implementation approach with data migration, system configuration, and testing."
      },
      {
        step: "04",
        title: "Go-Live & Support",
        description: "Smooth go-live transition with comprehensive training and ongoing support services."
      }
    ],

    technologies: [
      "Microsoft SQL Server",
      "Power BI",
      ".NET Framework",
      "Azure Cloud",
      "REST APIs",
      "Crystal Reports",
      "SharePoint Integration",
      "Office 365"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EresourceServices;
