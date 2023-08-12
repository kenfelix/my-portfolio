import React from 'react'
import EjectIcon from '@mui/icons-material/Eject';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const AnimatedButton = motion(Button)


const Hero = () => {
  return (
    <section className='text-white w-full h-screen relative'>
      <div className='flex flex-col pt-[30px] gap-3 justify-start items-start lg:mt-[30px] xl:mt-[60px] lg:gap-5'>
        <motion.div
        initial = {{ y: 90, opacity: 0 }}
        animate = {{ y: 0, opacity: 1 }}
        transition={{duration: .5, delay: 13 * 0.1}}
        className='bg-[#ff692d] p-3 md:max-w-[200px] font-mono md:text-lg relative'>
          <motion.p
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1 }}
            transition={{duration: .5, delay: 14 * 0.1}}
          >Hello, I am</motion.p>
          <EjectIcon className='text-[#ff692d] rotate-180 absolute right-[50%] left-[45%] -bottom-[15px]'/>
        </motion.div>
        <motion.h3
        initial = {{ y: 90, opacity: 0 }}
        animate = {{ y: 0, opacity: 1 }}
        transition={{duration: .5, delay: 15 * 0.1}}
        className=' mt-5 text-[38px] md:text-7xl lg:text-8xl text-[#CCD6F6] font-extrabold font-sans'>Emeka Okafor.
        </motion.h3>
        <motion.p
        initial = {{ y: 90, opacity: 0 }}
        animate = {{ y: 0, opacity: 1 }}
        transition={{duration: .5, delay: 16 * 0.1}}
        className='text-[#8892B0] text-base lg:text-xl xl:text-2xl font-sans text-left max-w-[800px]'>
          I am a software engineer with passion for turning ideas into software products. 
          Aside my time playing the guitar and singing, my most favourite hours is the time i spend on the IDE.
        </motion.p>
        <div className='flex flex-row gap-2 mt-[50px] lg:mt-[30px] w-full'>
          <AnimatedButton 
            variant='contained'
            initial = {{ x: 90, opacity: 0 }}
            animate = {{ x: 0, opacity: 1 }}
            transition={{duration: .5, delay: 17 * 0.1}}
            onClick={()=> {window.open("../../../resume.pdf")}}
            className='!bg-[#ff692d] !capitalize !w-[130px] md:!w-[200px] md:!text-xl md:!h-[60px]'>
              Download CV
          </AnimatedButton>
          <Link 
            to='work'
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AnimatedButton
            initial = {{ x: 90, opacity: 0 }}
            animate = {{ x: 0, opacity: 1 }}
            transition={{duration: .5, delay: 18 * 0.1}}
            variant='outlined'
            className='!text-[#ff692d] !border-[#ff692d] !capitalize !w-[130px] md:!w-[200px] md:!text-xl md:!h-[60px]'
            >My work
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero