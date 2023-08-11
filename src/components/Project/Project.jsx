import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';


const AnimatedCard = motion(Card)


const Project = ({title, description, stack, image, github, link}) => {
  return (
    <AnimatedCard 
      initial = {{ y: 10, opacity: 0 }}
      whileInView = {{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{duration: 0.5, delay: 1 * 0.1}}
      sx={{ height: 545}} 
      className='!bg-[#170d0d] !max-w-full !md:max-w-[345px]'>
      <CardHeader
        avatar={
         <FolderOutlinedIcon fontSize='large' className='!text-[#ff692d]'/>
        }
        action={
            <CardActions disableSpacing>
                <IconButton 
                aria-label="github" 
                className='!text-[#A8B2D1] hover:!text-[#ff692d]'
                href={github}
                target='_blank'
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton 
                aria-label="appLink"
                className='!text-[#A8B2D1] hover:!text-[#ff692d]'
                href={link}
                target='_blank'
                >
                    <LaunchIcon />
                </IconButton>
            </CardActions>
        }
      />
      {image !== '' ? <CardMedia
        component="img"
        image={image}
        className='px-5 h-[40%] w-full object-contain'
      /> : ''}
      <CardContent className='flex flex-col justify-between h-[250px]'>
        <Typography gutterBottom variant="h5" component="div" className='text-[#CCD6F6]'>
          {title}
        </Typography>
        <Typography variant="body2" className='text-[#A8B2D1]'>
          {description}
        </Typography>
        <div className="h-10"></div>
        <div className='flex flex-row gap-3 align-bottom'>
          {stack.map((item, index) => (
            <ul 
            key={index}
            className='text-[#8892B0] flex flex-wrap mt-[20px] text-[12px] font-mono'>
            {item}
          </ul>
          ))}
        </div>
      </CardContent>
    </AnimatedCard>
  )
}

export default Project