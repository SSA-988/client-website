import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';


type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 p-5 flex flex-row items-start justify-between max-w-5xl mx-auto z-20 xl:items-center'>
            <motion.div initial={{ opacity: 0, x: -500, scale: 0.5 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.5 }} className='flex flex-row items-center'>
                    {socials.map((social) => (
                           <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
                    ))}
             
             

            </motion.div>
            <Link href="#contact">
                <motion.div initial={{ opacity: 0, x: 500, scale: 0.5 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.5 }} className='flex flex-row items-center cursor-pointer'>
                    <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in Touch</p>
                </motion.div>
            </Link>

        </header>
    )
}

export default Header