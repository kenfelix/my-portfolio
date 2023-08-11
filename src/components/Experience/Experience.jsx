import React from 'react'
import { motion } from 'framer-motion'
import { Divider } from '@mui/material';

const AnimatedDivider = motion(Divider)

const Experience = () => {
  return (
    <section id='experience' className='w-full h-full flex flex-col'>
      <div className='flex flex-row items-center w-full gap-2 justify-center mt-2 mb-[40px]'>
        <AnimatedDivider
        initial = {{ x: -90, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] w-[40px] md:w-[100px] lg:w-[200px]'/>
        <motion.p
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 2, delay: 2 * 0.1}}
        className='capitalize text-[#CCD6F6] text-[26px] md:text-[32px] font-mono font-semibold'>
          Where i've Worked
        </motion.p>
        <AnimatedDivider
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] w-[40px] md:w-[100px] lg:w-[200px]'/>
      </div>
    </section>
  )
}

export default Experience