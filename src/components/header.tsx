import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { SheetSide } from "./sheet";
import {NavigationMenuDemo} from "./navigationBar"


export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[60px] border-b md:h-[90px] pr-2 max-w-screen-2xl mx-auto bg-white">
        <div className="flex justify-center items-center ">
            <SheetSide/>
            <h1 className="text-2xl md:text-4xl font-extrabold  pl-2">SHOP.CO</h1>
        </div>
        <ul className="hidden sm:block text-xl">
            <li className="space-x-5 flex ml-4 mt-2 items-center">
                <Link href={""}>
                <NavigationMenuDemo/>
                </Link>
                <Link href={"/casual"}>On sale</Link>
                <Link href={"/products-detail"}>New arrivals</Link>                                                              
                <Link href={"/brands"}>Brands</Link>
            </li>
        </ul>

        <div className="ml-14 flex justify-center items-center">
                <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full "> 
               <span className="text-xl hidden lg:block"> <FaSearch />  </span>
                <input   placeholder={`Search for products...`}  className="bg-[#F0F0F0] outline-none  w-full h-full rounded-full ml-2 hidden lg:block"/></div>
                
            </div>
            <div className="flex justify-between items-center gap-5 pr-2 ">
                <span className="text-xl  lg:hidden">
            <FaSearch />
            </span>

            <span className="text-xl  ">
            <Link href={"/cart"}>
             
                <LuShoppingCart /></Link>
                </span>

            <span className=" text-xl">
            <CgProfile/>
            </span>
            </div>
         
     </header>
  );
}


















            {/* <div className="  bg-[#fbfafa] flex justify-center items-center w-{330px] h-{40px] rounded-[62px]">
            <span className=" hidden md:block text-xl ml-2">
            <FaSearch/>
            </span>
            <input placeholder="Search for product..." className="bg-[#F0F0F0] w-full h-full rounded-full ml-2 hidden lg:block "></input>
            </div>
           

            <div className="flex items-center mr-8 space-x-6">
        <span className="text-2xl" >
        <LuShoppingCart />
        </span>

        <span className="md:hidden text-xl ml-2">
            <FaSearch/>
            </span>

        <Link href={"/cart"}>
        <span className ="text-2xl" >
        <CgProfile /></span>
        </Link>

        

        </div>
    </header>
  );
} */}