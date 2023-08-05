import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {fadeIn,pVariant,textVariant} from '../utils/motion'
import {staggerContainer} from '../utils/motion'
import {github} from '../assets'
import {projects} from '../constants'

const ProjectCard = ({index,name,description,tags,image,source_code_link,source_live_demo})=>{
  return (
    <motion.div variants={fadeIn("up","spring",index * 0.5,0.75)}>
      <div
        className='bg-tertiary p-5 rounded-2xl border-2 border-violet-900 h-full'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div
            className='absolute inset-0 flex justify-end m-3 card-img_hover'
          >
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              onClick={()=>window.open(source_code_link,"_blank")}
            >
              <motion.img 
                src={github}
                alt="github"
                className=' object-contain bg-tertiary border-2 border-violet-900 px-1  mx-3 h-10 rounded-xl outline-none w-[50px]'
                whileHover={{scale:1.1}}
              />
            </div>
            
            <motion.button 
              className='bg-tertiary px-3 mx-3 h-10 border-2 border-violet-900 rounded-xl outline-none w-fit  font-bold '
              whileHover={{scale:1.1}}
              onClick={()=>window.open(source_live_demo,"_blank")}
            >
              <span className='text-orange-500'>Live Demo</span>
            </motion.button>
          </div>
        </div>
        <div className='mt-5 w-full'>
          <h3 className='text-orange-500 font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <motion.div
      variantss={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} mx-auto relative z-0 `}
      id="work"
    >
      <motion.div variants= {textVariant()} className="relative text-center lg:text-left" whileHover={{scale:1.1, left:50}}>
          <span className={`${styles.heroHeadText}  `}>
            &lt;Projects&frasl; &gt;
          </span>
        </motion.div>

      <div className='w-full flex'> 
        <motion.p
          variants={pVariant()}
          className="mt-3 text-secondary text-[17px] leading-[30px]"
        >
          Bên dưới là những sản phẩm đơn giản mình từng làm. Có nhiều thiếu sót và mình luôn mong muốn học hỏi những cái mới để có thể phát triển tốt hơn những dự án của mình.
        </motion.p>
      </div>
      <div className='mt-20 grid xss:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7'>
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

export default Works
