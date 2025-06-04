"use client"

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Resolution from "./pages/Resolution/Resolution"
import Servicess from "./pages/Servicess/Servicess"
import { routes } from './routes.js'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
      <ScrollToTop />
      <div className="app">
        <Header scrolled={scrolled} />
        <Routes>
          <Route path={routes.home.path} element={<Resolution />} />
          <Route path={routes.servicess.path} element={<Servicess />} />
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
