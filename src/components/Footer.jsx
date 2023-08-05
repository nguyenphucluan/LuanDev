import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {staggerContainer} from '../utils/motion'

const Footer = () => {
  return (
    <motion.div
      variantss={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} mx-auto relative z-0 bg-primary`}
      id="contact"
    >
        <div className='flex text-pink-600'>
            Cảm ơn mọi người đã xem hết trang web của mình nha. Mọi người có thể để lại góp ý tại phần Contact để giúp mình hoàn hiện hơn.
            Xin cảm ơn nhiều ạ. 
        </div>
    </motion.div>
  )
}

export default Footer
