import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Divider } from '@mui/material';
import Project from '../Project/Project';
import { projects } from '../../constants';
import Button from '@mui/material/Button';


const AnimatedDivider = motion(Divider)

const MAX_PROJECTS_TO_SHOW = 3

const Work = () => {
  const [projectsToShow, setProjectsToShow] = useState(MAX_PROJECTS_TO_SHOW);
  const showAllProjects = () => setProjectsToShow(projects.length);
  const showLessProjects = () => setProjectsToShow(MAX_PROJECTS_TO_SHOW);
  return (
    <section id='work' className='w-full h-full flex flex-col pb-[100px]'>
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
          Things I’ve Built
        </motion.p>
        <AnimatedDivider
        initial = {{ x: 90, opacity: 0 }}
        whileInView = {{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{duration: 1, delay: 1 * 0.1}}
        className='bg-[#f09d7c] !flex-grow max-w-[150px]'/>
      </div>
      <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
        {projects.slice(0, projectsToShow).map((project, index) => (
          <motion.div
            initial = {{ y: 90, opacity: 0, scale: 1 }}
            whileInView = {{ y: 0, opacity: 1 }}
            whileHover={{scale: 1.03}}
            viewport={{ once: true }}
            transition={{duration: .3, delay: index * 0.1}}
            className='w-full'
          >
            <Project 
              title={project.title}
              description={project.description}
              stack={project.stack}
              image={project.image}
              github={project.github}
              link={project.link}
              key={index}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial = {{ y: 90, opacity: 0, scale: 1 }}
        whileInView = {{ y: 0, opacity: 1 }}
        whileHover={{scale: 1.1}}
        viewport={{once: true}}
        transition={{duration: .3}}
        className='mt-[40px] flex w-full items-center justify-center'
      >
        {projectsToShow < projects.length ? (
          <Button
            variant="outlined"
            color="primary"
            className="!border-[#FF4900] focus:!ring-[#FF4900] !text-[#FF4900]"
            onClick={showAllProjects}
          >
            Show More
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            className="!border-[#FF4900] focus:!ring-[#FF4900] !text-[#FF4900]"
            onClick={showLessProjects}
          >
            Show Less
          </Button>
        )}
      </motion.div>
    </section >
  )
}

export default Work