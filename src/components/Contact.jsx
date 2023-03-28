import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {slideIn} from '../utils/motion'
import {staggerContainer} from '../utils/motion'
import emailjs from '@emailjs/browser'
import {github,location,phone,email} from "../assets"
import {socials} from "../constants"

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading,setLoading] = useState(false)

  const handleChange = (e) =>{
    const {name,value} = e.target

    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      "service_9we8hig",
      "template_tmkwpn5",
      {
        from_name:form.name,
        to_name:"Adrian",
        from_email:form.email,
        to_email:"myemail@gmail.com",
        message:form.message
      },
      "oQGNFFLo1w6zaFcMP"
    )
    .then(()=>{
      setLoading(false)
      alert(`Cảm ơn ${form.name} đã liên hệ. Mình sẽ liên hệ lại bạn sớm nhất có thể nha <3`)

      setForm({
        name:"",
        email:"",
        message:""
      },(error)=>{
        setLoading(false)
        console.log(error)
        alert("something went wrong")
      })
    })
  }


  return (
    <motion.div
      variantss={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-primary`}
      id="contact"
    >
      <div className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden'>
        <motion.div
          variant={slideIn("right","tween",0.2,1)}
          className='xl:flex-1  xl:h-auto md:h-[550px] h-[700px] leading-5'
        >
          <div className='pt-5'>
            <p className='text-[32px] pt-5 leading-10 px-3'>
            Cảm ơn mọi người đã xem hết trang web của mình nha. Mọi người có thể để lại góp ý tại phần Contact để giúp mình hoàn hiện hơn. 
            Xin cảm ơn nhiều ạ.
            </p>
            <div className='flex flex-col leading-5'> 
              <div className='text-[24px] my-3'>
                <img src={location} className="w-[50px] h-[50px] inline-block"/>
                <span className='text-violet-900'>TPHCM , Việt Nam</span> 
              </div>
              <div className='text-[24px] my-3'>
                <img src={phone} className="w-[50px] h-[50px] inline-block"/>
                <span className='text-violet-900'>(+84) 366 874 330</span>
              </div>
              <div className='text-[24px] my-3'>
                <img src={email} className="w-[50px] h-[50px] inline-block"/>
                <span className='text-violet-900'>nguyenphucluan19022000@gmail.com</span>
              </div>
              <div className='flex flex-row pt-10 justify-center items-center'>
                {socials.map((social)=>(
                  <a key={social.name} href={social.href} className=' px-5 mx-3 '>
                    <motion.img 
                      src={social.src}
                      className="w-[50px] h-[50px]"
                      whileHover={{
                        scale:1.1
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variant={slideIn("left","tween",0.2,1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          
        >
          <h3 className={`${styles.sectionHeadText} font-medium text-center text-violet-900`}>Liên hệ</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
            <span className='text-violet-900 font-medium mb-4'>Tên của bạn:</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Tên bạn là gì?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-violet-900 font-medium mb-4'>Email:</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email của bạn là gì?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-violet-900 font-medium mb-4'>Lời nhắn</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Hãy để lại lời nhắn tại đây nhé'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          </form>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Contact
