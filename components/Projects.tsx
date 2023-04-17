import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings';
import urlFor from '../sanity';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row mx-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10 ' >
                {projects.map((project) => (
                    <div key={project._id} className='w-full flex-shrink-0  snap-center flex flex-col space-y-4 items-center justify-center p-10 h-screen '>
                        <motion.img initial={{ y: -300 }} transition={{ duration: 1.2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='object-contain w-[300px] h-[300px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[310px] cursor-pointer' src={urlFor(project?.image).url()} alt="" />
                        <h4 className='text-3xl mt-10'>{project?.title}</h4>
                        {/* <p className='text-md  text-center md:text-left'>we will build  Netflix with react native from scratch and this is going to be a lot of fun and if you find this interesting please smash the like button for me 💯 ,also consider subscribing!!
                            we will build  Netflix with react native from scratch and this is going to be a lot of fun and if you find this interesting please smash the like button for me 💯 ,also consider subscribing!!
                        </p> */}
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
        </div>
    )
}

export default Projects