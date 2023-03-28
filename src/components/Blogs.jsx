import React,{useState,useRef} from 'react'
import Tilt from "react-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn,textVariant} from '../utils/motion'
import {staggerContainer} from '../utils/motion'
import {projects} from '../constants'
import {github} from '../assets'


const ProjectCard = ({index,name,description,image,source_code_link})=>{
  return (
    <motion.div variants={fadeIn("up","spring",index * 0.5,0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl cursor-pointer'
            onClick={()=>window.open(source_code_link,"_blank")}
          />
        </div>
        <div className='mt-5'>
          <h3 className='text-white fontn-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Blogs = () => {
  return (
    <motion.div
      variantss={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-primary`}
      id="blogs"
    >
      <motion.div variants= {textVariant()} className="relative text-center lg:text-left" whileHover={{scale:1.1, left:50}}>
          <span className={`${styles.heroHeadText} text-pink-600 `}>
            &lt;Blogs&frasl; &gt;
          </span>
          <span className={`${styles.heroHeadText} absolute inset-0 top-0`}> 
            &lt;Blogs&frasl; &gt;
          </span>
        </motion.div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project,index)=>(
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Blogs
