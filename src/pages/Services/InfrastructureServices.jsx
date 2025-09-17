import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate/ServicePageTemplate';
import ITinfrastructureLogo from '../../assets/images/ProductLogos/it-infrastructure.png';

const InfrastructureServices = () => {
  const serviceData = {
    title: "IT Infrastructure Services",
    subtitle: "Building Robust, Scalable IT Foundations",
    description: "Comprehensive IT infrastructure planning, implementation, and management services to ensure optimal performance, reliability, and business continuity for your organization.",
    logo: ITinfrastructureLogo,
    heroGradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    
    stats: [
      { number: "400+", label: "Infrastructure Projects" },
      { number: "99.8%", label: "Network Uptime" },
      { number: "30%", label: "Cost Reduction" }
    ],

    services: [
      {
        title: " Networking Infrastructure and Structure Cabling",
        description: "Design and implement robust network infrastructure with optimal performance and security.",
        features: [" Networking Infrastructure ,Network Architecture", "LAN/WAN Setup", "Wireless Networks", "Network Security"]
      },
      {
        title: "Server Infrastucture Management",
        description: "Efficient lifecycle management of physical and virtual server environments.",
        features: ["Server Provisioning & Configuration", "Virtualization & Hypervisor Management", "Performance Monitoring & Alerts", "Backup & Backup & Disaster Recovery" , "Patch Management & Updates"]
      },
      {
        title: "Cloud & IP PBX Telephony Solutions",
        description: "Secure, scalable telephony systems for modern business communication.",
        features: ["Custom On-Site VoIP Systems", "Enterprise-Grade Control & Security", "PSTN & SIP Integration", "Features: IVR, Voicemail, Call Queues","Fully Cloud-Based Setup","Fast Deployment & Easy Scaling","Desktop & Mobile Access","Perfect for Remote & Multi-Site Teams"]
      },
      {
        title: "Security Infrastructure Management",
        description: "Comprehensive setup and support for physical and digital security systems.",
        features: ["Firewall Deployment & Configuration", "Secure VPN Connectivity", "CCTV Supply, Installation & Maintenance", "Biometric Access Control Systems","Email Threat Protection & Filtering","Setup of Additional Security Components (e.g., IDS/IPS, Endpoint Protection, Network Segmentation)"]
      },
      {
        title: "Data Recovery Services",
        description: "Reliable recovery solutions for lost, corrupted, or compromised data across platforms.",
        features: ["Ransomware-Affected Data Restoration", "Recovery from Laptops, Desktops, HDDs, SSDs, USB Drives & Other Storage Devices", "Email Data Retrieval & Restoration", "Cloud-Based Data Recovery Solutions"]
      },
      {
        title: "Hardware Sales, Service & Support",
        description: "End-to-end solutions for IT hardware procurement, maintenance, and lifecycle support.",
        features: ["Sales of Laptops, Desktops, Servers, Firewalls, Switches, Routers, Access Points, Printers & Other IT Components", "Flexible AMC (Annual Maintenance Contract) Plans for Hardware Support", "Professional Hardware Repair & Servicing"]
      }
    ],

    benefits: [
      {
        title: "High Availability",
        description: "Ensure maximum uptime with redundant systems and proactive monitoring."
      },
      {
        title: "Scalability",
        description: "Infrastructure that grows with your business needs and requirements."
      },
      {
        title: "Cost Optimization",
        description: "Optimize infrastructure costs while maintaining performance and reliability."
      },
      {
        title: "24/7 Monitoring",
        description: "Continuous monitoring and support to prevent issues before they impact business."
      }
    ],

    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Comprehensive assessment of current infrastructure and business requirements."
      },
      {
        step: "02",
        title: "Planning",
        description: "Develop detailed infrastructure design and implementation roadmap."
      },
      {
        step: "03",
        title: "Implementation",
        description: "Execute infrastructure deployment with minimal business disruption."
      },
      {
        step: "04",
        title: "Management",
        description: "Ongoing monitoring, maintenance, and optimization of infrastructure."
      }
    ],

    technologies: [
      "VMware vSphere",
      "Microsoft Hyper-V",
      "Cisco Networking",
      "Dell/HP Servers",
      "Azure/AWS",
      "Veeam Backup",
      "SolarWinds",
      "Fortinet Security"
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default InfrastructureServices;