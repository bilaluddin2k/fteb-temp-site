"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Resolution from "./pages/Resolution/Resolution"
import ITServices from "./pages/ITServices/ITServices"
import { routes } from './routes.js'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Header scrolled={scrolled} />
        <Routes>
          <Route path={routes.home.path} element={<Resolution />} />
          <Route path={routes.itSolutions.path} element={<ITServices />} />
          <Route path={routes.company.path} element={<Resolution />} />
          <Route path={routes.elements.path} element={<Resolution />} />
          <Route path={routes.caseStudies.path} element={<Resolution />} />
          <Route path={routes.blog.path} element={<Resolution />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
