import React, {useEffect, useState} from 'react'
import { Divider } from '@mui/material';
import { motion} from 'framer-motion';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css.png'
import pythonIcon from '../../assets/python.png'
import jsIcon from '../../assets/js.png'
import typescriptIcon from '../../assets/typescript.png'
import nodejsIcon from '../../assets/nodejs.png'
import fastapiIcon from '../../assets/fastapi.png'
import flaskIcon from '../../assets/flask.png'
import djangoIcon from '../../assets/django.png'
import reactIcon from '../../assets/react.png'
import nextjsIcon from '../../assets/nextjs.svg'
import sqlIcon from '../../assets/sql.png'
import mongoIcon from '../../assets/mongo.svg'
import { frontend, backend } from '../../constants';

const AnimatedDivider = motion(Divider)

const Skill = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const icons = [pythonIcon, jsIcon, typescriptIcon, htmlIcon, cssIcon, nodejsIcon, fastapiIcon, flaskIcon,
    djangoIcon, reactIcon, nextjsIcon, sqlIcon, mongoIcon
  ]
  useEffect(() => {
    // Increment the current index to display the next icon in the list
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000); // Adjust the interval (in milliseconds) to control the speed of the carousel

    return () => clearInterval(interval);
  }, []);
  return (
    <section id='skill' className='w-full h-full flex flex-col pb-[100px]'>
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
          My SKills
        </motion.p>
        <AnimatedDivider
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] !flex-grow max-w-[150px]'/>
      </div>
        
      <div className='flex flex-col md:flex-row w-full h-full gap-[50px] md:gap[100px]'>
        <div className='w-full md:w-[50%] items-start font-sans'>
          <div className='flex flex-col gap-[20px] w-full items-center'>
            <motion.p
            initial = {{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1 * .1}}
            className='text-left text-[#ff692d] text-xl'>Frontend Tools</motion.p>
            <div className='flex flex-row max-w-full flex-wrap gap-4 justify-center md:justify-start'>
              {frontend.map((item, index) => (
                <motion.span
                initial = {{ x: -90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: index * .1}}
                key={index}
                className='hover:bg-[#ff692d] hover:text-white px-[8px] py-[4px] rounded-[.25rem]
                text-[#e0e6f6] flex flex-wrap bg-[#71635d]
                '>
                  {item}
                </motion.span>
              ))}
            </div>
            <motion.p
            initial = {{ x: -90, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: (1 + frontend.length) * .1}}
            className='text-left text-[#ff692d] text-xl'>Backend Tools</motion.p>
            <div className='flex flex-row max-w-full flex-wrap gap-4 justify-center md:justify-start'>
              {backend.map((item, index) => (
                <motion.span
                initial = {{ x: -90, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: (index + frontend.length) * .1}}
                key={index}
                className='hover:bg-[#ff692d] hover:text-white px-[8px] py-[4px] rounded-[.25rem]
                text-[#e0e6f6] flex flex-wrap bg-[#71635d]
                '>
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full md:w-[50%] relative flex items-center justify-end mb-[60px] md:mb-0'>
          {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            className='max-w-[150px] h-[100px] top-0 left-[35%] md:max-w-[300px] md:h-[200px] absolute
            md:top-[30%]'
            alt={`Icon ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              x: currentIndex === index ? 0 : -50, // Adjust the value to control the horizontal position of the active icon
            }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 10}} // Adjust the duration of the transition effect
          />
        ))}
        </div>
      </div>
    </section >
  )
}

export default Skill