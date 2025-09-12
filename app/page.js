import React from 'react'
import Navbar from './Component/Nevbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skill'
import Projects from './Component/Work'
import Contact from './Component/Contact'
import Footer from './Component/Footer'


const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page