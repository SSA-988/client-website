import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formdata => {
        window.location.href = `mailto:sujananand0@gmail.com?subject=${formdata.subject}&body= Hi, my name is ${formdata.name} ,${formdata.message} (${formdata.email})`;
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-7 mt-24'>
                <h4 className='text-2xl font-semibold text-center'>We have have Got just what you need!</h4>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='h-8 w-8 animate-pulse' />
                        <p className='text-xl'>+91 9743248659 | +91 6364703667</p>
                    </div>


                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='h-8 w-8 animate-pulse' />
                        <p className='text-xl'>poornimagroups1@gmail.com </p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='h-8 w-8 animate-pulse' />
                        <p className='text-xl'>No 19 Chinnamma Layout, Cholanagar Hebbal Bangalore 560032</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' action="">
                    <div className='flex space-x-2'>
                        <input {...register("name")} placeholder='Name' className="contactInput" type="text" />
                        <input {...register("email")} placeholder='Email' className="contactInput" type="email" />
                    </div>
                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />
                    <textarea {...register("message")} placeholder='Message' className="contactInput" name="" id=""></textarea>
                    <button type='submit' className='bg-[#F7AB0A] px-10 py-4 rounded-sm font-bold text-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact