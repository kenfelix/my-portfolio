import React from 'react'
import { Divider } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import Image from '../Image/Image';

const AnimatedDivider = motion(Divider)



const About = () => {
  const parentControls = useAnimation();
  const childControls = useAnimation();

  const handleHover = async () => {
    await parentControls.start({ y: -2, x: -2 });
    await childControls.start({ y: 2, x: 2 });
  };

  const handleHoverEnd = async () => {
    await parentControls.start({ y: 0, x: 0 });
    await childControls.start({ y: 0, x: 0 });
  };
  return (
    <section id='about' className='w-full h-full flex flex-col pb-[100px]'>
      <div className='flex flex-row flex-grow-0 items-center w-full gap-2 justify-center mt-2 mb-[40px]'>
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
          about me
        </motion.p>
        <AnimatedDivider
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] !flex-grow max-w-[150px]'/>
      </div>
      <div className='flex flex-col md:flex-row gap-[50px] items-center md:items-start justify-between'>
        <motion.div 
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 3 * 0.1}}
        className='flex flex-col gap-2 text-[18px] lg:text-[20px] text-[#8892B0] font-sans text-left max-w-full md:max-w-[60%]'>
          <p>Hello! I am Emeka Okafor, a software engineer with passion for turning ideas into software products.
            Although, In my second year of university, I did a <mark className='bg-[#ff692d] text-[#f4f6f9]'>course on Java and C++</mark>, 
            my software journey started in 2020 when I did a free EDX course on <mark className='bg-[#ff692d] text-[#f4f6f9]'>2D game development using Lua programming.</mark>
          </p>
          <p>Fast-forward to 2021, I did a 1-year <mark className='bg-[#ff692d] text-[#f4f6f9]'>software engineering course with ALX Africa where I majored in Backend engineering.</mark>
            Since then I have had the privilege to volunteer and also freelanced with a couple of startups including <mark className='bg-[#ff692d] text-[#f4f6f9]'>Revampinsights; 
            where I help build highly scalable web APIs.</mark>
          </p>
          <p>I currently focus on building any software solution including <mark className='bg-[#ff692d] text-[#f4f6f9]'>Web2 and Web3 applications.</mark> 
            Some of the technologies I have worked with recently include <mark className='bg-[#ff692d] text-[#f4f6f9]'>Python, javascript, typescript, FastAPI, NextJs and Vyper(for smart contracts).</mark>
            I am looking forward to other exciting opportunities to contribute to the technology space.
          </p>
        </motion.div>
        <motion.div 
          className='flex w-[70%] h-[70%] md:w-[40%] md:h-[40%] relative'
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverEnd}
          initial={{ y: 0, x: 0 }}
          animate={parentControls}
        >
          <motion.div
          initial={{ y: 0, x: 0 }}
          animate={childControls}
            className="w-full h-full absolute top-[10px] left-[10px] rounded-md border-[1px] border-[#ff692d]">
          </motion.div>
          <Image 
          src='https://avatars.githubusercontent.com/u/65518572?s=400&u=6932887faa1af6ec34da7b9bedaab808ce744403&v=4'
          className='w-full h-full object-cover rounded-md'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About