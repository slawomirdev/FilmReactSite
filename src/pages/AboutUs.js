import React from 'react'
//Page components
import AboutSections from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
//animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSections />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  )
}

export default AboutUs
