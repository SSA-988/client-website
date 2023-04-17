import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import car from "../public/images/car.jpg"
import image from "../public/images/image.jpg"
import { PageInfo } from '../typings'
type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' >
            <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>About</h3>
            <motion.img className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-64 xl:w-[250px] xl:h-[250px]' initial={{ x: -200, opacity: 0, }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src="https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800" />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a little background</h4>
                <p className='text-sm '>Poornima Import and Export a company that is well known for the timber round logs and cut sizes as well as plywood with more than 40 years of experience with domestic network we are happy to announce that we are expanding our network to middle countries</p>
            </div>
        </motion.div>
    )
}

export default About