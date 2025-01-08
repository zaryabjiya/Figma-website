import React from 'react'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { Plus } from 'lucide-react'
import { Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbDemo } from '@/components/breadcrumbs'
import  { useState } from 'react';


const Cart = () =>{
const cartItems = [
    {
    imageurl: "/pic13.png",
    title:" Gradient Graphic T-shirt",
    size: "large", 
    id: 1,
    price: 145,
    color: "White", 
    },
    {
    imageurl: "/pic3.png",
    title:"Checked Shirt",
    size: "Medium", 
    id: 2,
    price: 180,
    color: "Red", 
    },
    {
    imageurl: "/pic2.png",
    title:" Skinny Fit Jeans",
    size: "Large", 
    id: 3,
    price: 240,
    color: "Blue", 
    }
            
]

const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;



// export default function cart () {
  return (
    <div className='flex justify-center items-center flex-col max-w-screen-2xl mx-auto relative'>
    <span className='absolute top-0 left-0'>
    <BreadcrumbDemo/>
    </span>

    <div className="w-[95%] max-w-[1200px] mt-10">
          <h1 className="text-2xl md:text-3xl font-bold pl-2">Your cart</h1>
          </div>
          
          <div className="w-[95%] sm:w-full flex flex-col md:flex-row justify-center items-start gap-6 mt-4">
                  <div className="w-full lg:w-[700px] space-y-4 border rounded-[20px] pt-2 ">
                    {cartItems.map((detail,index)=>{
                     return (
                      <div className="flex justify-between border-b px-3 pb-3" key={detail.id}>
                       <div className="flex ">
                       <div>
                             <Image src={detail.imageurl} width={100} height={100}  alt={detail.title}></Image>
                            </div>
                            <div className="ml-3">
                                <h1 className="font-bold" key={index}>{detail.title}</h1>
                                <p key={index}>Size:{detail.size}</p>
                                <p key={index}>Color:{detail.color}</p>
                                <p className="font-bold" key={index}>${detail.price}</p>
                            </div>
                       </div>
                            <div className="relative ">
                             <span  className="absolute top-0 text-xl right-0 sm:right-3 text-red-500">
                             <MdDelete/>
                              </span>
                              <div className="md:w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 absolute bottom-0 right-0 ">
                                <Minus/>
                                1
                                <Plus/>
                             </div>
                            </div>
                      </div>
                     )
                    })}
                  </div>
      
                         <div className="bg-white p-4 w-full lg:w-[500px] border rounded-[20px]">
                             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                             <div className="space-y-2">
                               <div className="flex justify-between">
                                 <p>Subtotal</p>
                                 <p>${subtotal}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Discount (-20%)</p>
                                 <p>-${discount.toFixed(2)}</p>
                               </div>
                               <div className="flex justify-between">
                                 <p>Delivery Fee</p>
                                 <p>${deliveryFee}</p>
                               </div>
                               <div className="border-t pt-2 flex justify-between font-bold">
                                 <p>Total</p>
                                 <p>${total.toFixed(2)}</p>
                               </div>
                               <div className="flex justify-between items-center">
                                <input className="h-10 rounded-[6px] bg-[#F0F0F0] px-4 w-[200px] md:w-[360px] border-none" type="search" placeholder="Add promo code" />
                                <Button className="w-[100px] rounded-[20px]">Apply</Button>
                               </div>
                             </div>
                             <button className="w-full mt-4 bg-black text-white py-2 rounded-md">
                               Go to Checkout
                             </button>
                         </div>
          </div>
       </div>
  )
}

export default Cart;






















    {/* <div></div>
    <h1 className='text-4xl font-extrabold mt-11 h-4'>Your Cart</h1>
    </div>

    <div className='flex flex-col md:flex-row justify-center items-center gap-3 mt-8'>

      <div className='md:w-[700px] md:h-[500px] w-full h-full border rounded-[20px]'>
        {
            items.map((item)=>{
                return(
                    <div className='flex justify-between mt-4 p-4 border-b'>
                        <div className='flex gap-4'>
                        <Image src={item.imageurl} alt={item.title} width={100} height={100}  className='rounded-[16px]'></Image>
                    <div>
                        <h3 className='text-xl font-bold'>{item.title} </h3>
                        <p className='text-sm'>Size: {item.size} </p>
                        <p className='text-sm'>Color: {item.color}</p>
                        <p className='text-3xl font-bold'>{item.price}</p>
                        </div>
                    </div>

                    <div className="relative ">
                        <span className="absolute top-0 text-xl right-0 sm:right-3 text-red-500">
                              <MdDelete /></span>
                              <div className="md:w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 absolute bottom-0 right-0 ">
                                <Minus/>1<Plus/>
                        </div>
                        </div>
                    </div>
                )
            })
        }
      </div>


      <div className='md:w-[400px] md:h-[450px] mt-0 border rounded-[20px] w-full h-full flex flex-col justify-start items-center p-4 '>
        <div className='w-[90%] space-y-2 '>
        <h1 className='text-2xl font-extrabold '>Order Summery</h1>
        <p className='flex justify-between text-black'>SubTotal <span>$505</span> </p>
        <p className='flex justify-between text-black'>Discount (-20%) <span>-$113</span> </p>
        <p className='flex justify-between text-black'>Delivery Fee <span>$15</span> </p>
        <p className='flex justify-between text-black mt-3'>Total <span>$467</span> </p>
        {/* <p>-${discount.toFixed(2)}</p> */}
        {/* <div>
        <input className='bg-gray-200 text-black  md:w-full outline-none py-2 px-4 mt-7 rounded-[20px] ' placeholder='Add Promo Code' />
        <Button className='ml-2 rounded-[20px] w-[20%]'>Apply</Button>
        </div>
        </div>

        <Button className='w-full mt-5'>Go To Checkout</Button>
      </div>

    </div>
    </>
  )
}


export default Cart; */}