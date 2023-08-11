import React, { useEffect } from 'react'
import { Logo } from 'components'
import { NAV } from 'src/constants'
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import { useAppContext } from 'helper';
import { Menu } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const AnimatedSouthIcon = motion(SouthIcon)
const AnimatedButton = motion(Button)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


const Header = () => {
  const { 
    active,
    prevScrollPos, setPrevScrollPos,
    visible, setVisible,
    isOpen, setIsOpen
  } = useAppContext();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > prevScrollPos) {
      setVisible(false)
    }else{
      setVisible(true)
    }

    setPrevScrollPos(currentScrollPos)
  }

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos]
  )

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  
  return (
    <header className={`flex w-full h-[100px] items-center justify-between sticky z-50
    bg-[#000000] ${visible ? 'top-0' : ''}`}>
      {/* logo */}
      <Logo/>

      {/* mobile nav */}
      <Menu fontSize='large' className='text-[#ff692d] md:!hidden' onClick={handleClickOpen}/>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            backgroundColor: '#000000',
            boxShadow: 'none',
          },
        }}
      >
        <div className='flex flex-row-reverse px-5 py-2'>
          <IconButton
            edge="start"
            color=""
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon className='text-[#ff692d]' fontSize='large' />
          </IconButton>
        </div>
        <ul className='flex flex-col gap-4 items-center' >
          {NAV.map( (item, index) => (
            <motion.li
              key={index}
              initial = {{ y: 90, opacity: 0 }}
              animate = {{ y: 0, opacity: 1 }}
              transition={{duration: .5, delay: index * 0.1}}
              className={`p-[10px] font-mono hover:text-[#ff692d] cursor-pointer text-[#C4CFEE]`}
              ><Link 
              to={`${item.link}`}
              activeClass="text-[#ff692d]"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClose}
              >{item.title}
              </Link>
            </motion.li>
            
          ))}
          <AnimatedButton
          initial = {{ y: 90, opacity: 0 }}
          animate = {{ y: 0, opacity: 1 }}
          transition={{duration: .5, delay: 6 * 0.1}}
          variant="outlined"
          color="primary"
          className="!border-[#FF4900] focus:!ring-[#FF4900] !text-[#FF4900]"
          >Resume
          </AnimatedButton>
        </ul>
      </Dialog>

      {/* Nav */}
      <nav className='hidden md:flex flex-row gap-4 items-center'>
        <motion.ul
        className=' flex flex-row gap-4 items-center' >
          {NAV.map( (item, index) => (
            <motion.li
              initial = {{ y: -90, opacity: 0 }}
              animate = {{ y: 0, opacity: 1 }}
              transition={{duration: .5, delay: index * 0.1}}
              key={index}
              className={`p-[10px] font-mono cursor-pointer hover:text-[#ff692d] text-[#C4CFEE]`}
              ><Link 
              to={`${item.link}`}
              activeClass="text-[#ff692d]"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >{item.title}
              </Link>
              <AnimatedSouthIcon
              initial = {{opacity: 0, scale: 0.8}}
              animate = {{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 0,
                  stiffness: 50
                }
              }}
              exit={{opacity: 0, scale: 0}}
              fontSize='10'
              className={`${active === item.link ? "" : "!hidden"}
              !text-[#FF4900] !ml-2`}/>
            </motion.li>
            
          ))}
          <AnimatedButton
          initial = {{ y: -90, opacity: 0 }}
          animate = {{ y: 0, opacity: 1 }}
          transition={{duration: .5, delay: 6 * 0.1}}
          variant="outlined"
          color="primary"
          className="!border-[#FF4900] focus:!ring-[#FF4900] !text-[#FF4900]"
          >Resume
          </AnimatedButton>
        </motion.ul>
      </nav>

    </header>
  )
}

export default Header