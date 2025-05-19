import "./Services.css"
import ServiceCard from "./ServiceCard"

const Services = () => {
  const services = [
    {
      icon: "fas fa-desktop",
      title: "Warranty Management IT",
      description:
        "Our service offerings enhance customer experience throughout highly functional warranty management.",
    },
    {
      icon: "fas fa-comments",
      title: "Product Control Services",
      description: "Develop and propose product improvements through accurate testing, monitoring & review process.",
    },
    {
      icon: "fas fa-globe",
      title: "Quality Control System",
      description:
        "It's more than a responsibility but a guarantee from us with highly reliable quality control system.",
    },
    {
      icon: "fas fa-server",
      title: "IT Management",
      description: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cyber Security",
      description: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Services",
      description: "We provide the most responsive and functional IT design for companies and businesses worldwide.",
    },
  ]

  return (
    <section className="services section">
      <div className="container">
        <div className="section-title">
          <h6>OUR SERVICES</h6>
          <h2>
            We Offer a Wide <br />
            Variety of IT Services
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
