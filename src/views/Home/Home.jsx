import React, { useEffect, useRef } from 'react'
import { Hero, About, Experience, Skill, Work, Contact } from '@components'
import { Navigation } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { animateScroll as scroll, scrollSpy as spy } from "react-scroll";
import { useAppContext } from '@helper';
import throttle from 'lodash/throttle';

const Home = () => {
  const {setActive} = useAppContext()
  const getSectionId = () => {
    let scrollPosition = window.scrollY;

    let sectionElements = document.getElementsByTagName("section");
    for (let i = 0; i < sectionElements.length; i++) {
      let sectionElement = sectionElements[i];

      let sectionTop = sectionElement.offsetTop;
      let sectionHeight = sectionElement.offsetHeight;
      let sectionBottom = sectionTop + sectionHeight;

      if (scrollPosition + 70 >= sectionTop && scrollPosition < sectionBottom) {
        setActive(sectionElement.id);
        spy.update()
      }
    }
  };

  const ThrottledGetSectionId = throttle(getSectionId, 200);
  useEffect(() => {
    ThrottledGetSectionId();
  }, [window.scrollY]);
  return (
    <div className='flex flex-col md:mx-[30px] lg:mx-[70px] gap-[10px] 2xl:gap-0'>
        <Hero/>
        <About/>
        <Fab 
        variant='circular' 
        onClick={()=>{
          scroll.scrollToTop()
          spy.update()
        }}
        className='!bg-[#FF4900] !fixed z-50 !bottom-[5vh] !right-[5vw]' aria-label="like">
            <Navigation className='text-white'/>
        </Fab>
        {/* <Experience/> */}
        <Skill/>
        <Work/>
        <Contact/>
    </div>
  )
}

export default Home