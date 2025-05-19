"use client"

import { useState, useEffect, useRef } from "react"
import "./CounterSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faRocket, 
  faPeopleGroup, 
  faCheckDouble, 
  faTrophy 
} from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  faRocket,
  faPeopleGroup,
  faCheckDouble,
  faTrophy
}

const Counter = ({ end, duration, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px'
      }
    )

    const currentRef = countRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Enterprise smooth easing
      const easeOutExpo = t => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t)
      const easedProgress = easeOutExpo(percentage)

      setCount(Math.floor(easedProgress * end))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
        setHasAnimated(true)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration, hasAnimated])

  const formattedNumber = count.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  return (
    <div ref={countRef} className="counter">
      <h2>
        {prefix}
        {formattedNumber}
        {suffix}
      </h2>
    </div>
  )
}

const CounterSection = () => {
  const counters = [
    {
      icon: "faRocket",
      number: 2500,
      suffix: "+",
      title: "Projects Delivered",
      delay: 0
    },
    {
      icon: "faPeopleGroup",
      number: 150,
      suffix: "+",
      title: "Global Team Members",
      delay: 1
    },
    {
      icon: "faCheckDouble",
      number: 98,
      suffix: "%",
      title: "Client Success Rate",
      delay: 2
    },
    {
      icon: "faTrophy",
      number: 35,
      suffix: "+",
      title: "Industry Recognition",
      delay: 3
    }
  ]

  return (
    <section className="counter-section">
      <div className="counter-grid">
        {counters.map((counter, index) => (
          <div 
            key={index} 
            className="counter-item"
            style={{ '--delay': counter.delay }}
          >
            <div className="counter-icon">
              <FontAwesomeIcon 
                icon={iconMap[counter.icon]}
              />
            </div>
            <Counter 
              end={counter.number} 
              duration={2000} 
              suffix={counter.suffix}
            />
            <h4>{counter.title}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CounterSection
