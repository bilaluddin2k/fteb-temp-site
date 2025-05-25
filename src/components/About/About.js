import "./About.css"
import aboutImage from "../../assets/images/Screenshot 2025-05-12 185016.png"

const About = () => {
  const features = ["Quality Management", "Highly Professional Staff", "Accurate Testing Processes", "24/7 Support"]

  return (
    <section className="about section bg-light">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={aboutImage || "/placeholder.svg"} alt="About Us" />
            <div className="experience-badge">
              <h2>10</h2>
              <p>Years Experience</p>
            </div>
          </div>

          <div className="about-content">
            <h6>ABOUT US</h6>
            <h2>We've been providing advanced IT solutions ahead of time.</h2>
            <p className="lead">
             We are leading technology solutions providing company all over the world doing over 10+ years. We help businesses elevate their value through cloud solution, DevOps, custom software development, product design, QA and consultancy services.
            </p>
            <p className="description">
              We are committed to providing our clients with exceptional service while offering our employees the best
              training and a working atmosphere that promotes self-development and teamwork.
            </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
