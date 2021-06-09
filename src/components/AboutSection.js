import React from 'react'
import home1 from '../img/home1.png'
//style

import { About, Description, Image, Hide } from '../styles'

//framer motion
import { motion } from 'framer-motion'

const AboutSection = () => {
 

  return (
    <About>
      <Description>
        <motion.div
         
        >
          <Hide>
            <motion.h2 >We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 >true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professional with amazin skills.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  )
}

//Styled Components

export default AboutSection
