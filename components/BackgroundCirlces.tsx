import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCirlces({}: Props) {
  return (
    <motion.div   initial={{ opacity: 0 }}
    animate={{ scale:[1,1.5,2,2,1],opacity: [0,1,0.2,0.8,0.1,1] }}
    transition={{ duration: 2 }} className='relative flex justify-center items-center mt-20'> 
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
        {/* <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping'/> */}
        <div className='absolute border border-[#F7AB0A] rounded-full h-[550px] w-[550px] mt-56 animate-pulse'/>
    

        <div/>
    </motion.div>
  )
}

export default BackgroundCirlces