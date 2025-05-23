"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { routes } from '../../routes.js'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../assets/images/Picture1.png"

const Header = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
     

      <div className="main-header">
        <div className="wrapper">
          <div className="main-header-inner">
            <div className="logo">
              <Link to={routes.home.path}>
                <img src={Logo} alt="Mitech Logo" className="logo-icon" />
                <h1>Ftechteb</h1>
              </Link>
            </div>

            <div className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <nav className={`main-nav ${mobileMenuOpen ? "active" : ""}`}>
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to={routes.home.path} end>{routes.home.name}</NavLink>
                </li>
               
                <li className="menu-item">
                  <NavLink to={routes.itSolutions.path}>{routes.itSolutions.name}</NavLink>
                </li>
                
               
                <li className="menu-item">
                  <div className="search-container">
                    <button className="search-toggle" onClick={toggleSearch}>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    {searchOpen && (
                      <div className="search-field">
                        <input type="text" placeholder="Search..." />
                        <button className="search-submit">
                          <FontAwesomeIcon icon={faSearch} />
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
