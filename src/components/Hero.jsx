import React from 'react'
import {motion} from "framer-motion"
import {styles} from '../styles'
import {avatar,cv} from '../assets'
import { TypeAnimation } from 'react-type-animation';
import {staggerContainer} from '../utils/motion'
import {socials} from "../constants" 

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} mx-auto relative z-0`}
      id="home"
    >
      <section className={` mb-5 relative top-[50px] w-full h-[1000px] lg:h-[700px] flex flex-col lg:flex-row`}>
        <div className="relative mt-10 text-center lg:text-left w-full lg:w-1/2 h-full lg:h-1/2 leading-10 ">
          <h2 className={`${styles.heroSubText} text-white`}>Xin chào, Mình là</h2>
          <h1 className={`${styles.heroHeadText} font-bold text-orange-500`}>Nguyễn Phúc Luân</h1>
          <TypeAnimation
            className={`${styles.heroSubText} text-white`}
            sequence={[
              'Web Developer', 
              3000, 
              'Web Designer',  
              3000,
              'Youtuber', 
              3000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
          />
          <p className={`${styles.sectionSubText} text-slate-500`}>
            Mình là Front-End Dev ReactJs biết về UI/Ux Deisgn. Sẵn sàng học hỏi những kiến thức mới nhằm hoàn thiện bản thân hơn. Với mong muốn được học hỏi kiến thức và kinh nghiệm từ mọi người nhiều hơn.
          </p>
          <div className='relative flex flex-col justify-center items-center md:flex-row pt-5'>
            <motion.a 
              href="#contact"
              className='w-1/2 flex items-center justify-center h-[50px] border-2 border-violet-900 text-violet-900 mx-5 rounded-3xl mb-5 max-w-xs'
              whileHover={{
                scale:1.1
              }}
            >
              <motion.button 
                className=''
              >
                <span className ="text-white">Liên Hệ &nbsp; </span>
              </motion.button>
            </motion.a>
            <motion.a 
              href={cv} 
              download="NguyenPhucLuanCV.pdf"
              className='w-1/2 flex items-center justify-center h-[50px] bg-violet-900 mx-5 rounded-3xl mb-5 max-w-xs'
              whileHover={{
                  scale:1.1
                }}
            >
              <motion.button 
                className=''

              >
                <span>CV của mình &nbsp; </span>
              </motion.button>
            </motion.a>
          </div>
          <div className='flex flex-row items-center justify-center pt-5'>
              Follow mình:
              {socials.map((social)=>(
                <motion.a 
                  key={social.name}
                  whileHover={{scale:1.1}}
                  onClick={()=>window.open(social.href,"_blank")}
                >
                  <img 
                    src={social.src}
                    className="w-[50px] h-[50px] mx-5 cursor-pointer"
                  />
                </motion.a>
              ))}
          </div>  
        </div>

        <div className='relative flex w-full lg:w-1/2 h-full lg:h-1/2'>
          <img 
            src={avatar}
            className="relative xss:h-full xs:h-4/5 sm:w-4/5 sm:h-4/5 mx-auto w-[400px] h-2/3 lg:h-[600px] lg:w-[550px] "
          />
          
        </div>
      </section>
    </motion.div>
  )
}

export default Hero
