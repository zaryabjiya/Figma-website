import Image from "next/image"

export default function Dstyle(){
  return (

    <main id="brands">
      <div>
    <div className=" w-full mt-9 mb-1 flex justify-center items-center flex-wrap  max-w-screen-2xl mx-auto">
   
      <div className="w-[90%] md:w-[80%] bg-[#F0F0F0] p-3 md:p-0 rounded-[20px]">
        <div className="flex justify-center items-center">
        <h1 className="font-extrabold text-black text-4xl  md:text-4xl pt-8">BROWSE BY DRESS STYLE</h1>
      </div>
      <div className="flex flex-col mt-7 lg:flex-row lg:flex-wrap justify-center items-center">
       <div className="w-[90%] md:w-[400px] bg-white lg-w-[350px] h-[250px] mt-4 md:mt-0  relative "> 
       <Image src={"/dress-style-1.png"} alt="style1" width={200} height={200} className="w-full h-full rounded-[20px]"/>
       <span className="absolute top-8 left-10 font-bold text-3xl">Casual</span>
       </div>

       <div className="w-[90%] md:w-[600px] bg-white lg-w-[550px] h-[250px] mt-4 md:mt-0  relative"> 
       <Image src={"/dress-style-2.png"} alt="style2" width={200} height={200} className="w-full h-full rounded-[20px]"/>
       <span className="absolute top-8 left-10 font-bold text-3xl">Formal</span>
       </div>

       <div className="w-[90%] md:w-[600px] bg-white lg-w-[550px] h-[250px] mt-4 md:mt-0  relative"> 
       <Image src={"/dress-style-3.png"} alt="style3" width={200} height={200} className="w-full h-full rounded-[20px]"/>
       <span className="absolute top-8 left-10 font-bold text-3xl">Party</span>
       </div>

       <div className="w-[90%] md:w-[400px] bg-white lg-w-[350px] h-[250px] mt-4 md:mt-0  relative"> 
       <Image src={"/dress-style-4.png"} alt="style4" width={200} height={200} className="w-full h-full rounded-[20px]"/>
       <span className="absolute top-8 left-10 font-bold text-3xl">Gym</span>
       </div>
       </div>

      </div>
    </div>

    </div>
</main>

  )
};


