import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

interface Items{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_rate?:string,
    img_url:string;
}

let product1:Items[] = [
    {
        title:"Gradient Graphic T-shirt",
        price:"$145",
        id:12,
        img_url:"/pic13.png",
        },
        {
        title:"Polo with Tipping Details",
        price:"$180",
        id:13,
        img_url:"/pic14.png",
        },
        {
        title:"Black Striped T-shirt",
        price:"$120",
        id:14,
        img_url:"/pic15.png",
        old_rate:"$160",
        },
        {
            title:"SKINNY FIT JEANS",
            price:"$240",
            id:2,
            img_url:"/pic2.png",
            old_rate:"$260",
            },
            {
            title:"CHECKERED SHIRT",
            price:"$180",
            id:3,
            img_url:"/pic3.png",
            },
            {
            title:"SLEEVE STRIPED T-SHIRT",
            price:"$130",
            id:4,
            img_url:"/pic4.png",
            old_rate:"$160" ,
            },
            {
                title:"COURAGE GRAPHIC T-SHIRT",
                price:"$145",
                id:6,
                img_url:"/pic6.png",
                },
                {
                title:"LOOSE FIT BERMUDA SHORTS",
                price:"210",
                id:7,
                img_url:"/pic7.png",
                },
                {
                title:"FADED SKINNY JEANS",
                price:"$130",
                id:8,
                img_url:"/pic8.png",
                },
]

let rating = [<IoIosStar key={1} />,
<IoIosStar key={2} />,
<IoIosStar key={3} />,
<IoIosStar key={4} />,
<IoIosStar key={5} />]


export default function CasualShirts() {
  return (
    <div className="w-full h-full mt-9  md:h-[500px] ml-8 gap-17  ">
      <h1 className="md:text-4xl text-3xl font-bold text-start ">CASUAL</h1>
      <div className="flex w-full flex-wrap justify-center items-center px-8 mt-10 gap-5">

      {/* <div className="flex w-full flex-wrap flex-col md:flex-row justify-center items-center md:justify-between sm:w-full  px-8 mt-10 gap-5 "> */}
        {
            product1.map((detail)=>{
                return(
                    <div key={detail.id}>
                        <Link href={`/products-detail/${detail.id}`}>
                        <div className=" bg-[#F0EEED] w-full md:w-[230px] sm:w[290px] h-[230px] rounded-[20px]  ">
                        {/* <div className="  bg-[#F0EEED] w-full md:w-[230px] sm:w[290px] h-[230px]  flex ml-5  mt-3  rounded-[20px] "> */}
                        
                        <Image src={detail.img_url} alt={detail.title} width={100} height={100} 
                        className="w-full h-full rounded-[15px]"></Image>
                        </div>
                        </Link>
                       
                        <div>
                        <p className="mt-3 text-lg font-bold">{detail.title}</p>
                        <p  className="flex text-yellow-500 ">{rating}</p>
                        <p className="font-bold mt-2 ">{detail.price} <span className="font-bold text-gray-500 line-through"> {detail.old_rate} </span></p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}


