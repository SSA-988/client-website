import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings'
import urlFor from '../sanity'

type Props = {
  skill:Skill
    directionLeft?:boolean
}

function Skill({directionLeft,skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img className='w-12 h-12 md:w-16 md:h-16 rounded-full object-cover object-center filter group-hover:grayscale transition duration-300 ease-in-out' initial={{x:directionLeft ? -200 : 200,opacity:0}} transition={{duration:1}} whileInView={{opacity:1,x:0}} src={urlFor(skill?.image).url()}/>
        <div className='w-12 h-12 absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-16 md:h-16 rounded-full z-0' >
            <div className='flex items-center justify-center h-full'>
                <p className='text-md md:text-xl font-bold text-black opacity-100'>{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill