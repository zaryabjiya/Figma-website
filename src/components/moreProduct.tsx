import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    title:"Polo with Contrast Trims",
    price:"$212",
    id:12,
    img_url:"/pic12.png",
    old_rate:"$242",
    },
    {
    title:"Gradient Graphic T-shirt",
    price:"$145",
    id:13,
    img_url:"/pic13.png",
    },
    {
    title:"Polo with Tipping Details",
    price:"$180",
    id:14,
    img_url:"/pic14.png",
    },
    {
    title:"Black Striped T-shirt",
    price:"$120",
    id:15,
    img_url:"/pic15.png",
    old_rate:"$160",
    },
]

let rating = [<IoIosStar key={1} />,
<IoIosStar key={2} />,
<IoIosStar key={3} />,
<IoIosStar key={4} />,
<IoIosStar key={5} />]


export default function morePro() {
  return (
    <>
    <div className="w-full h-full sm:h-[500px] mt-9 max-w-screen-xl mx-auto ">
      <h1 className="md:text-4xl text-5xl font-extrabold text-center ">YOU MIGHT ALSO LIKE</h1>
      <div className=" px-8 mt-10 flex-col md:flex-row overflow-x-auto flex space-x-5 ">
                        
        {
            product1.map((detail)=>{
                return(
                    <div key={detail.id}>
                        <Link href={`/products-detail/${detail.id}`}>
                        {/* <div className="w-[200px] md:w-[283px] h-[200px] md:h-[290px] bg-[#F0EEED] rounded-[20px]"> */}
                        <div className="  bg-[#F0EEED] w-full md:w-[230px] sm:w[260px] h-[230px] flex ml-5 left-9 mt-3 gap-7 rounded-[20px] ">
                        <Image src={detail.img_url} alt={detail.title} width={100} height={100} 
                        className="w-full h-full rounded-[20px]  "/>
                        </div>
                        </Link>
                        
                        <div className="pl-2">
                        <p className="mt-2 text-lg font-bold">{detail.title}</p>
                        <div  className="flex text-yellow-500 ">
                          {rating.map((icon, index)=> (
                            <span key={index}>{icon}</span>
                          ))}
                          </div>
                        <p className="font-bold mt-1">{detail.price} 
                        <span className="font-bold text-gray-500 line-through"> {detail.old_rate} </span></p>
                        </div>
                    </div>
                );
            })
        }
      </div>
    </div>
    <div>
      <Link href="/casual">
        <Button variant={"outline"} className="sm:mt-0 w-[80%] sm:w-[200px] rounded-[20px]"></Button>
      </Link>
    </div>
    </>
  )
}


