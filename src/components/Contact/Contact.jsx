import React from 'react'
import { motion } from 'framer-motion'
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const AnimatedDivider = motion(Divider)

const Contact = () => {
  const handleSayHelloClick = () => {
    window.open('mailto:emekaokafor08056@gmail.com', '_blank');
  };
  return (
    <section id='contact' className='w-full h-full flex flex-col py-[50px] lg:py-[100px] mb-[100px]'>
      <div className='flex flex-row flex-grow-0 items-center justify-center w-full gap-2 mt-2 mb-[40px]'>
        <AnimatedDivider
        initial = {{ x: -90, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] !flex-grow max-w-[150px]'/>
        <motion.p
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 2, delay: 2 * 0.1}}
        className='capitalize text-[#CCD6F6] text-[26px] md:text-[32px] font-mono font-semibold'>
          Get In Touch
        </motion.p>
        <AnimatedDivider
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] !flex-grow max-w-[150px]'/>
      </div>
      <motion.div
      initial = {{ y: 90, opacity: 0, scale: 1 }}
      whileInView = {{ y: 0, opacity: 1 }}
      viewport={{once: true}}
      transition={{duration: .3}}
      className='w-full flex items-center justify-center'
      >
        <Typography variant="body2" className='text-[#A8B2D1] max-w-[600px] text-[20px]'>
        Feel free to reach out to me with any inquiries, collaboration opportunities, or just to say hello! I'm excited to connect and discuss how we can work together.
        </Typography>
      </motion.div>
      <motion.div
        initial = {{ y: 90, opacity: 0, scale: 1 }}
        whileInView = {{ y: 0, opacity: 1 }}
        whileHover={{scale: 1.1}}
        viewport={{once: true}}
        transition={{duration: .3}}
        className='mt-[40px] flex w-full items-center justify-center'
      >
        <Button
          variant="outlined"
          color="primary"
          className="!border-[#FF4900] focus:!ring-[#FF4900] !text-[#FF4900]"
          onClick={handleSayHelloClick}
        >
          Say Hello
        </Button>
      </motion.div>
    </section >
  )
}

export default Contact