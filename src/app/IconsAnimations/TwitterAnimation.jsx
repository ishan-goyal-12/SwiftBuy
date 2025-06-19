import React from 'react'
import Lottie from "lottie-react";
import twitter from "./twitter.json";
const TwitterAnimation = () => {
  return (
    <Lottie animationData={twitter} loop={true} className='scale-90 cursor-pointer' />
  )
}

export default TwitterAnimation