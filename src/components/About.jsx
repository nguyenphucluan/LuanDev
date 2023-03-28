import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant,pVariant} from '../utils/motion'

const ServiceCard = ({index,title,icon,intro})=>{
  return (
    <div className='xs:w-[350px] w-full '>
      <motion.div 
        variants={fadeIn("right","spring",0.5 * index,0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
        >
          <img 
            src={icon} 
            alt={title} 
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
          <p>{intro}</p>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return <>
    <motion.div
       initial="hidden"
       whileInView="show"
       viewport={{once:true,amount:0.25}}
       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
       id="about"
    >
      <motion.div variants= {textVariant()} className="relative text-center lg:text-left" whileHover={{scale:1.1, left:50}}>
        <span className={styles.heroHeadText}>
          &lt;About Me&frasl; &gt;
        </span>
        <span className={styles.heroHeadText + ' absolute text-violet-900 inset-0 top-0'}> 
          &lt;About Me&frasl; &gt;
        </span>
      </motion.div>
      <motion.p 
        variants={pVariant()}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        Mình là sinh viên năm cuối của Trường Đại Học Tôn Tức Thắng, Chuyên nghành kỹ thuật phần mềm. Mình luôn mong muốn trao dồi và học hỏi thêm nhiều kiến thức từ mọi người. Sẵn sàng nhận mọi góp ý tốt xấu để có thể hoàn thiện bản thân nhiều hơn.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </motion.div>
  </>;
}

export default About
