import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {staggerContainer,fadeIn} from '../utils/motion'
import {technologies} from '../constants'

const Tech = () => {
  return (
    
      <motion.div
        variantss={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`${styles.padding} mx-auto relative z-0 `}
        id="tech"
      >
        <div
          className='flex flex-row flex-wrap justify-center gap-10'
        >
          {technologies.map((technology)=>(
            <motion.div 
              className='w-28 h-28 cursor-pointer' 
              key={technology.name}
              whileHover={{scale:1.1}}
              variants={fadeIn("right","spring",0.5 ,0.75)}
            >
              <img src={technology.icon}/>
            </motion.div>
          ))}
        </div>
      </motion.div>
    
  )
}

export default Tech
