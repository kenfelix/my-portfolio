import { Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import {LiaTelegramPlane} from 'react-icons/lia'


const Footer = () => {
  return (
    <div className='w-full h-full flex flex-col py-[50px] mb-[10px] gap-6 items-center'>
      <div className='flex items-center justify-between'>
        <IconButton 
          aria-label="github" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://github.com/kenfelix'}
          target='_blank'
          >
              <GitHubIcon />
        </IconButton>
        <IconButton 
          aria-label="linkedin" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://www.linkedin.com/in/emekakennethokafor/'}
          target='_blank'
          >
              <FiLinkedin />
        </IconButton>
        <IconButton 
          aria-label="twitter" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://twitter.com/_emekaokafor'}
          target='_blank'
          >
              <FiTwitter />
        </IconButton>
        <IconButton 
          aria-label="github" 
          className='!text-[#A8B2D1] hover:!text-[#ff692d]'
          href={'https://t.me/sonofzionk'}
          target='_blank'
          >
            <LiaTelegramPlane />
        </IconButton>
      </div>
      <Typography
        className='text-[#A8B2D1] max-w-[600px] text-[20px]'
        variant='body2'
      >
        Designed & Built by Emeka Okafor
      </Typography>
    </div>
  )
}

export default Footer