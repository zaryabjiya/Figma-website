import React from 'react'
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Uptodate from './Uptodate';

export default function footer () {
  return (
    <main className='bg-[#F0F0F0] w-full md:h-[400px] h-full relative p-7 md:px-12 flex flex-col justify-start items-center mt-32 '>
        <span className='absolute top-[-60px] ml-20'>
            <Uptodate/>
        </span>
        <div className='flex  flex-col md:flex-row justify-between items-start mt-52 md:mt-9 border-b-2 pb-7 p-5 h-[60%] w-full md:h-[400px]  sm:pt-32 '>
        <div className=' md:w-[40%] w-full mt-5 '>
            <ul>
                <h2 className='md:text-4xl text-3xl font-extrabold mt-2
                '>SHOP.CO</h2>
                <p className='text-gray-600 text-sm mt-3 '>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-center space-x-4 mt-4'>
                    <span className='text-xl'><FaFacebook /></span>
                    <span className='text-xl'><FaInstagram /></span>
                    <span className='text-xl'><FaGithub /></span>
                    <span className='text-xl'><FaTwitter /></span>
                    </div>
            </ul>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 w-full md:place-items-center justify-between'>
            <ul className='mt-5 space-y-1'>
                <h2 className="text-sm sm:text-2xl font-bold mt-3">COMPANY</h2>
                <li className='text-sm font-sans'>About</li>
                <li className='text-sm font-sans'>Features</li>
                <li className='text-sm font-sans'>Works</li>
                <li className='text-sm font-sans'>Career</li>
            </ul>

            <ul className='mt-5 space-y-1'>
                <h2 className="text-sm sm:text-2xl font-bold mt-3">HELP</h2>
                <li className='text-sm font-sans'>Customer Support</li>
                <li className='text-sm font-sans'>Delivery Details</li>
                <li className='text-sm font-sans'>Terms and Conditions</li>
                <li className='text-sm font-sans'>Privacy Policy</li>
            </ul>

            <ul className='space-y-1 mt-5'>
                <h2 className="text-sm sm:text-2xl font-bold mt-3">FAO</h2>
                <li className='text-sm font-sans'>Account</li>
                <li className='text-sm font-sans'>Manage Deliveries</li>
                <li className='text-sm font-sans'>Orders</li>
                <li className='text-sm font-sans'>Payments</li>
            </ul>

            <ul className='space-y-1 mt-5'>
                <h2 className="text-sm sm:text-2xl font-bold mt-3">RESOURCES</h2>
                <li className='text-sm font-sans'>Free eBooks</li>
                <li className='text-sm font-sans'>Development Tutorial</li>
                <li className='text-sm font-sans'>How to - Blog</li>
                <li className='text-sm font-sans'>Youtube Playlist</li>
            </ul>
            </div>

        </div>

        <div className='w-full flex flex-col md:flex-row justify-between items-center mt-5 md:mt-7'>
            <p className='md:text-sm text-xs'>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className='flex mt-4 md:mt-0'>
                    <Image src={"/Images/Visa.png"} className='w-[50px]' width={100} height={100} alt='pic'></Image>
                    <Image src={"/Images/Badge.png"} className='w-[50px]' width={100} height={100} alt='pic'></Image>
                    <Image src={"/Images/Paypal.png"} className='w-[50px]' width={100} height={100} alt='pic'></Image>
                    <Image src={"/Images/Applepay.png"} className='w-[50px]' width={100} height={100} alt='pic'></Image>
                    <Image src={"/Images/Gpay.png"} className='w-[50px]' width={100} height={100} alt='pic'></Image>

        </div>
        </div>
    </main>
  )
}


