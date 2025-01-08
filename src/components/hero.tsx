
import Image from "next/image"
import { motion } from "framer-motion"


export default function Hero () {
  return (
    <main className="bg-[#F2F0F1] md:h-[700px] flex justify-between items-start flex-col md:flex-row md:px-10 sm:pt-4 md:pt-0 max-w-screen-2xl mx-auto">
        <div className=" lg:w-[600px] md:pl-0 md:w-[500px] space-y-5 mt-10 sm:pt-7 px-3">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="bg-black px-8 py-2 w-full sm:w-[140px] text-white text-sm rounded-[20px] mt-4">Shop Now</button>

          <div className="flex justify-evenly md:justify-between flex-wrap  md:flex-nowrap gap-y-4 mt-4 ml-4 space-x-4">
            <div className="border-r pr-2">
            <h1  className="text-2xl md:text-5xl">200+</h1>
              <p className="text-xs md:text-[15px] text-gray-500 mt-1">International Brands</p>
            </div>
            <div className="border-r pr-5">
              <h1 className="text-2xl md:text-5xl">2,000+</h1>
              <p className="text-xs md:text-[15px] text-gray-500 mt-1">High Quality Products</p>
            </div>
            <div>
              <h1 className="text-2xl md:text-5xl">30,000+</h1>
              <p className="text-xs md:text-[15px] text-gray-500 mt-1">Happy Customers</p>
            </div>

          </div>
        </div>

        <div className="relative">
            <Image src={"/header-profile.png"} className="w-[500px] h-[600px] mr-5" width={200} height={200} alt="profile"></Image>

            <Image src={"/Vector (2).png"} className="w-[50px] md:w-[100px] top-[150px] ml-7 sm-6 absolute md:top-[300px] md:left-[-100px] " width={200} height={200} alt="star"></Image>

            <Image src={"/vector.png"} className=" w-[70px] mr-8 md:w-[100px] top-12 right-3 absolute md:top-[50px] md:right-[20px] " width={200} height={200} alt="star"></Image>
        </div>
    </main>
  )
}


