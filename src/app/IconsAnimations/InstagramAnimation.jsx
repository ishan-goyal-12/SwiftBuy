import React from 'react'
import Lottie from "lottie-react";
import instagram from "./instagram.json";
const InstagramAnimation = () => {
  return (
    <Lottie animationData={instagram} loop={true} className='scale-90 cursor-pointer' />
  )
}

export default InstagramAnimation