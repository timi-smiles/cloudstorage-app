import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { IoHardwareChip } from "react-icons/io5";
import { HiSupport } from "react-icons/hi";
import SupportImg from '../assets/support.jpg'

const Support = () =>{
    return(
        <div name='support' className="w-full mt-24">
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImg} alt="/" />
            </div>

            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center '>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam nulla odio corrupti, dolorem, omnis inventore, quia neque repellendus id non at eaque. Consectetur</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                            < FaPhoneSquareAlt className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem]'></FaPhoneSquareAlt>
                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestias doloribus! Quis nihil blanditiis esse animi minus voluptatem est tenetur.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                            < HiSupport className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem]'></HiSupport>
                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestias doloribus! Quis nihil blanditiis esse animi minus voluptatem est tenetur.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl ">
                        <div className="p-8 ">
                            < IoHardwareChip className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem]'></IoHardwareChip>
                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestias doloribus! Quis nihil blanditiis esse animi minus voluptatem est tenetur.</p>
                        </div>
                        <div className="bg-slate-100 pl-8 py-4">
                            <p className='flex items-center text-indigo-600 cursor-pointer'>Contact Us <FaArrowRight className='w-5 ml-2'></FaArrowRight></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support 