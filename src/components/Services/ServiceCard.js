const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="service-link">
        Learn more <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  )
}

export default ServiceCard
