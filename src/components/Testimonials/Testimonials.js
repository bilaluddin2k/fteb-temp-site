"use client"

import { useState, useEffect } from "react"
import "./Testimonials.css"
import TestimonialCard from "./TestimonialCard"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Reviewone from  "../../assets/images/male3.jpg"
import Reviewtwo from  "../../assets/images/male4.jpg"
import Reviewthree from  "../../assets/images/male5.jpg"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      content:
        "They are the best. Their software development is top-notch, and their design is outstanding. I highly recommend this company.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp",
      avatar: Reviewone,
      rating: 5
    },
    {
      content:
        "Working with the IT Solution team was a game-changer for our business. Their expertise in cloud solutions helped us scale efficiently.",
      author: "Michael Brown",
      position: "CTO, Innovate Inc",
      avatar: Reviewtwo,
      rating: 4
    },
    {
      content:
        "The cybersecurity solutions provided by this team have given us peace of mind. Their ongoing support is exceptional.",
      author: "Emily Davis",
      position: "Security Director, SecureNet",
       avatar: Reviewthree,
      rating: 5
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="testimonials section bg-light">
      <div className="container">
        <div className="section-title">
          <h6 className="testi">TESTIMONIALS</h6>
          <h2 className="three">What Our Clients Say</h2>
          <p className="testitwo">We've helped businesses of all sizes across various industries achieve their goals.</p>
        </div>

        <div className="testimonials-slider">
          <div 
            className={`testimonials-wrapper sliding-${activeIndex}`} 
            style={{ 
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`} key={index}>
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  position={testimonial.position}
                  avatar={testimonial.avatar}
                />
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="dot-indicator"></span>
                </button>
              ))}
            </div>
            <button className="slider-arrow next" onClick={nextSlide} aria-label="Next">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
