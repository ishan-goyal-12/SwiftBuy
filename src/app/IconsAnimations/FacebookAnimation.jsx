import React from 'react'
import Lottie from "lottie-react";
import facebook from "./facebook.json";
const FacebookAnimation = () => {
  return (
    <Lottie animationData={facebook} loop={true} className='scale-90 cursor-pointer' />
  )
}

export default FacebookAnimation