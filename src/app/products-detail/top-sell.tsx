import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { BreadcrumbDemo } from "@/components/breadcrumbs";

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
    title:"VERTICAL STRIPED SHIRT",
    price:"$212",
    id:5,
    img_url:"/pic5.png",
    old_rate:"$232",
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


export default function Sells() {
  
  return (
    <>
    

    <div className="w-full h-full mt-9 max-w-screen-xl mx-auto">
  
      <h1 className="md:text-4xl text-3xl font-extrabold text-center ">TOP SELLING</h1>
      <div className="flex space-x-5 overflow-x-auto  px-14 mt-9 relative">
        {
            product1.map((detail)=>{
                return(
                    <div key={detail.id} className="flex-shrink-0">
                        <Link href={`/products-detail/${detail.id}`}>
                        <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]">
                        {/* <div className=" bg-[#F0EEED] w-[190px] h-[190px] md:w-[283px] md:h-[290px] rounded-[20px] "> */}
                        <Image src={detail.img_url} alt={detail.title} width={100} height={100} 
                        className="w-full h-full rounded-[20px]"></Image>
                        </div>
                        </Link>
                       
                        <div className="pl-2">
                        <p className="mt-3 text-lg font-bold">{detail.title}</p>
                        <div  className="flex text-yellow-500 ">{rating.map((icon, index)=>(
                        <span key={index}>{icon}</span>))}
                        </div>

                        <p className="font-bold mt-2 ">{detail.price}{""} <span className="font-bold text-gray-500 line-through"> {detail.old_rate} </span></p>
                        </div>
                    </div>
                );
            })
        }
      </div>
    </div>

    <div className="flex justify-center items-start mt-5">
      <Link href="/casual">
      <Button variant={"outline"} className="sm:mt-0  sm:w-[200px] rounded-[20px] "> View All </Button>
      </Link>
    </div>

    </>
  )
}


