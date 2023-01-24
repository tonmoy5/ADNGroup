import React from 'react'
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import HowToSection from "../../Components/HowToSection/HowToSection"
import Usage from "../../Components/Usage/Usage"
import CTA from "../../Components/CTA/CTA"
import Footer from "../../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowToSection />
      <Usage />
      <CTA />
      <Footer />
    </>
  )
}

export default Home