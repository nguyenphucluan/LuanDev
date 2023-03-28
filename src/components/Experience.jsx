import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../styles'
import {experiences} from '../constants'
import {textVariant} from '../utils/motion'
import {staggerContainer} from '../utils/motion'

const ExperienceCard = ({experience})=>(
  <VerticalTimelineElement
    contentStyle={{background:'#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-full h-full object-contain rounded-3xl'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-violet-900 text-[24px] font-bold'>
        {experience.title}
      </h3>

      <p 
      className='text-secondary text-[16px] font-semibold '
      style={{margin:0}}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point,index)=>(
        <li
          key={`experience-point-${index}`}
          className='text-white text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    <div className='flex items-center justify-center py-3'>
      <motion.button 
        className=' border-2 border-violet-900 text-violet-900 w-[150px] h-[50px] rounded-3xl'
        whileHover={{
          scale:1.1
        }}
        onClick={()=>window.open(experience.source_code,"_blank")}
      >
        Github
      </motion.button>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variantss={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-primary`}
        id="experience"
      >
        <motion.div variants= {textVariant()} className="relative text-center lg:text-left" whileHover={{scale:1.1, left:50}}>
          <span className={`${styles.heroHeadText}  `}>
            &lt;Experience&frasl; &gt;
          </span>
          <span className={`${styles.heroHeadText} absolute text-violet-900 inset-0 top-0`}> 
            &lt;Experience&frasl; &gt;
          </span>
        </motion.div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience,index)=>(
              <ExperienceCard key={index} experience={experience} />
            ))}

          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  )
}

export default Experience
