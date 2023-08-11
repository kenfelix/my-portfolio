import React from 'react'
import logo from "@assets/logo.svg"
import { motion } from 'framer-motion'

const Logo = () => {
  // const bounceAnimation = {
  //   y: [0, -30, 0], // The y position keyframes: Start at 0, go up by 30 units, and return to 0
  //   transition: {
  //     duration: 0.5, // The duration of each animation cycle (bounce up and down)
  //     repeat: Infinity, // Make the animation loop indefinitely
  //     repeatType: "loop", // The type of repeat animation
  //     ease: "easeInOut", // The easing function for the animation (can be customized)
  //   },
  // };
  const rotationAnimation = {
    rotateY: [0, 360],
    transition: {
      duration: 1, 
      repeat: 0, 
      ease: "easeInOut", 
    },
    };
  return (
    <a href="/">
      <motion.img 
      initial={{ y: 0 }} // Initial position of the ball
      // whileHover={rotationAnimation}
      animate={rotationAnimation}
      src={logo} alt="Emeka Logo" className="w-[50px] h-[50px]"/>
    </a>
  )
}

export default Logo