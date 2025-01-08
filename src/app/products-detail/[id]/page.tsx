"use client"
import  Image from "next/image";
import { useParams } from "next/navigation";
import { IoIosStar } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Check } from "lucide-react";
import Reviews from "@/components/reviews";
import MorePro from "@/components/moreProduct";
import { BreadcrumbDemo } from "@/components/breadcrumbs";


let rating = [<IoIosStar key={1} />,
<IoIosStar key={2} />,
<IoIosStar key={3} />,
<IoIosStar key={4} />,
<IoIosStar key={5} />
];

interface Items{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_rate?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string,
}
let product1:Items[] = [
  {
  title:"T-SHIRT WITH TAPE DETAILS",
  price:"$260",
      id:1,
      img_url:"/pic1.png",
      old_rate:"$300",
      img1: "/pic1-detail.png",
      img2: "/pic2-detail.png",
      img3: "/pic1.png",
      },
  {
  title:"SKINNY FIT JEANS",
  price:"$240",
    id:2,
    img_url:"/pic2.png",
    old_rate:"$260",
    img1: "/pic1-detail.png",
    img2: "/pic2-detail.png",
    img3: "/pic2.png",
    },
  {
  title:"CHECKERED SHIRT",
  price:"$180",
    id:3,
    img_url:"/pic3.png",
    img1: "/pic1-detail.png",
    img2: "/pic2-detail.png",
    img3: "/pic3.png",
    },
  {
  title:"SLEEVE STRIPED T-SHIRT",
  price:"$130",
    id:4,
    img_url:"/pic4.png",
    old_rate:"$160" ,
    img1: "/pic1-detail.png",
      img2: "/pic2-detail.png",
      img3: "/pic4.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 5,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic5.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 6,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic6.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 7,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic7.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 8,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic8.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 9,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic12.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 10,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic13.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 11,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic14.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 12,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic15.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 13,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic5.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 14,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic6.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 15,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic8.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 16,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic12.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 17,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic13.png",
    },
    {
      title: "SLEEVE STRIPED T-SHIRT",
      id: 18,
      price: "$120",
      img_url: "/pic4.png",
      old_rate: "$200",
      img1: "/pic5.png",
      img2: "/pic2-detail.png",
      img3: "/pic14.png",
    },
    
]

export default function PicDetail() {
  const param = useParams();

  const id = param.id 
  const item = product1.find((item) => item.id === Number(id))

  if(!item){
    return <h1>Product not found</h1>
  }
  
  return (
    <>
    
    <div>
    <BreadcrumbDemo/>
         <div  className="flex justify-center sm:justify-evenly sm:mt-10 flex-col md:flex-row p-5 sm:p-0 px-5 max-w-screen-2xl mx-auto">
      <div className="flex flex-col sm:w-[152px]  w-full justify-between items-center order-2 sm:order-1">
        <Image src={item.img1} className="sm:w-full h-[100px] w-[100px] sm:h-[150px] rounded-[20px] " alt="product-detail" width={100} height={100}/>
        <Image src={item.img2} className="sm:w-full h-[100px] w-[100px] sm:h-[150px] mt-3 rounded-[20px]" alt="product-detail" width={100} height={100}/>
        <Image src={item.img3} className="sm:w-full h-[100px] w-[100px] sm:h-[150px] mt-3 rounded-[20px]" alt="product-detail" width={100} height={100}/>
      </div>

      <div className="sm:w-[444px] sm:h-[500px] h-[260px] mt-5 sm:mt-0 w-full order-1 sm:order-2">
      <Image src={item.img3} className="w-full h-[95%] rounded-[20px]" alt="product-detail" width={100} height={100}/>
      </div>

      <div className="w-full sm:w-[500px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
        <div  className="flex text-yellow-500 ">{rating.map((icon, index)=>(
          <span key={index}>{icon}</span>))}        
        </div>

        <p className="font-bold mt-1">{item.price} <span className="text-gray-600 line-through ml-1">{item.old_rate}</span>{""}</p>
        <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

        <div className="mt-5">
          <p className="text-gray-500">Select Colors</p>
          <div className="flex space-x-3 mt-3">
          <div className="w-[30px] h-[30px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
          <div className="w-[30px] h-[30px] bg-[#314F4A] rounded-full flex justify-center items-center" ><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
          <div className="w-[30px] h-[30px] bg-[#31344F] rounded-full flex justify-center items-center" ><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-3 mt-2">
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500 ">Small</div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500 " >Medium</div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500 " >Large</div>
          <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-500 " >X-Large</div>
          </div>
        </div>
        <div className="flex justify-start items-center mt-6 space-x-5">
        <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-500 " >
        <Minus/>1<Plus/>
        </div>
        <Button className="bg-black text-white w-[400px]">Add To Cart</Button>
      </div>
     
      </div>

    </div>
    </div>
    <Reviews />
    <MorePro />
    </>
  )
}


