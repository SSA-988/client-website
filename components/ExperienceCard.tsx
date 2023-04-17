import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import urlFor from '../sanity'
import Image from 'next/image'


type Props = {
  experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col m-10 mt-32 rounded-lg items-center space-y-7 flex-shrink-0 w-[550px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-4 overflow-scroll'>
      <motion.img initial={{ y: -100, opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className='h-32 w-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center ' src={urlFor(experience?.companyImage).url()} alt="" />
      <div className='px-0 md:px-10 '>
        <h4 className='text-2xl text-center font-light'>{experience?.jobTitle}</h4>
        <div className='flex space-x-2 my-2 justify-center mt-4'>
          {/* {experience?.technologies.map((technology) => (
            <Image key={technology?._id} className='w-10 h-10 rounded-full object-cover' src={urlFor(technology?.image).url()} alt="no value" />
          ))} */}



        </div>
        <p className='uppercase py-5 text-gray-400 text-center'>{experience?.dateStarted} -  {experience?.dateEnded}</p>
        <ul className='space-y-4 ml-5 text-lg list-disc'>
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard