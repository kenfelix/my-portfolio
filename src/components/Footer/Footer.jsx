import { Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import {LiaTelegramPlane} from 'react-icons/lia'
import { motion } from 'framer-motion';

const AnimatedIconButton = motion(IconButton)

const Footer = () => {
  return (
    <div className='w-full h-full flex flex-col py-[50px] mb-[10px] gap-6 items-center'>
      <div className='flex items-center justify-between'>
        <AnimatedIconButton
          initial = {{ y: 90, opacity: 0, scale: 1 }}
          whileInView = {{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{duration: .3, delay: 1 * 0.1 }}
          aria-label="github" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://github.com/kenfelix'}
          target='_blank'
          >
              <GitHubIcon />
        </AnimatedIconButton>
        <AnimatedIconButton
          initial = {{ y: 90, opacity: 0, scale: 1 }}
          whileInView = {{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{duration: .3, delay: 2 * 0.1 }}
          aria-label="linkedin" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://www.linkedin.com/in/emekakennethokafor/'}
          target='_blank'
          >
              <FiLinkedin />
        </AnimatedIconButton>
        <AnimatedIconButton 
          initial = {{ y: 90, opacity: 0, scale: 1 }}
          whileInView = {{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{duration: .3, delay: 3 * 0.1 }}
          aria-label="twitter" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://twitter.com/_emekaokafor'}
          target='_blank'
          >
              <FiTwitter />
        </AnimatedIconButton>
        <AnimatedIconButton 
          initial = {{ y: 90, opacity: 0, scale: 1 }}
          whileInView = {{ y: 0, opacity: 1 }}
          viewport={{once: true}}
          transition={{duration: .3, delay: 4 * 0.1 }}
          aria-label="github" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://t.me/sonofzionk'}
          target='_blank'
          >
            <LiaTelegramPlane />
        </AnimatedIconButton>
      </div>
      <motion.div
        initial = {{ y: 90, opacity: 0, scale: 1 }}
        whileInView = {{ y: 0, opacity: 1 }}
        viewport={{once: true}}
        transition={{duration: .3, delay: 5 * 0.1 }}
      >
        <Typography
          className='text-[#A8B2D1] max-w-[600px] text-[20px]'
          variant='body2'
        >
          Designed & Built by Emeka Okafor
        </Typography>
      </motion.div>
    </div>
  )
}

export default Footer