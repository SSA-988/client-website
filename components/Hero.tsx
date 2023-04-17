import React from 'react'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCirlces from './BackgroundCirlces'
import car from "../public/images/car.jpg"
import image from "../public/images/image.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '../typings'
import urlFor from '../sanity'
type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    console.log(pageInfo)
    const [text, count] = useTypewriter({
        words: ["Hi,Welcome to Poornima Exports ", "Participation in global trade", "Produces finest timber",],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCirlces />
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ3k0CcIw5dU-AIDWREub-ovarGYDrFdr7g&usqp=CAU"/> */}
            <Image width={150} height={150} className='relative mx-auto  object-cover' src={require('../images/logo.jpeg')} alt="loading" />
            <div className='z-20'>
                <h2 className='text-sm text-gray-500 uppercase pb-2 tracking-[15px]'>Timber Logistics</h2>
                <h1 className='text-4xl lg:text-4xl font-semibold'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>ABOUT</button>
                    </Link>

                    <Link href="#experience">
                        <button className='heroButton'>EXPERIENCE</button>
                    </Link>

                    <Link href="#skills">
                        <button className='heroButton'>SKILLS</button>
                    </Link>

                    <Link href="#projects">
                        <button className='heroButton'>PROJECT</button>
                    </Link>


                </div>
            </div>


        </div>
    )
}

export default Hero