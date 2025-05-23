import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from './config/email'

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
