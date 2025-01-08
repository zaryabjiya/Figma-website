import { AccordionDemo } from "@/components/accordion"
import { SliderDemo } from "@/components/slider"
import { CheckboxDemo } from "@/components/checkbox"
import Size from "@/components/size"
import { Styling } from "@/components/styling"
import CasualShirts from "@/components/allShirts"
import { BreadcrumbDemo } from "@/components/breadcrumbs"
// 

export default function Casual(){
  return(
      <div className="mt-2 max-w-screen-2xl  mx-auto">
          <BreadcrumbDemo/>
        
          <div className="flex flex-col md:flex-row justify-start items-center space-x-4 mt-5">
         
              <div className="w-[90%] h-full md:w-[295px] md:h-[1220px] rounded-[20px] border">
                 
                 <div>
                      <AccordionDemo/>
                      <div className="px-5 border-b pb-3">
                          <h1 className="text-lg font-bold "></h1>
                          <SliderDemo className="cursor-pointer"/>
                          <p className=" space-x-10 flex justify-between ml-3 font-bold mt-1"><span>$50</span> <span>$100</span> <span>$500</span></p>
                      </div>
                      <div className="flex flex-col px-5 mt-3 ml-1 border-b pb-3">
                      <CheckboxDemo />
                      </div>
                      <div className="flex flex-col px-5 mt-3 ml-1 border-b pb-3">
                      <h1 className="text-lg font-bold ">Size</h1>
                          <div className="flex flex-wrap mt-2 "> 
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">XX-Small</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Small</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">XX-Large</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">3X-Large</div>
                      <div className="w-[80px]  ml-1 mt-1  h-[40px] text-sm hover:bg-black hover:text-white cursor-pointer flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">4X-Large</div>
                          </div>
                      </div>
                      {/* drees */}
                      <div>
                          <Styling />
                      </div>
                 </div>
              </div >
              {/* right */}
              <div className="w-full md:w-[900px] h-full md:h-[1220px] mt-3 md:mt-0 border-b ">
                   <CasualShirts/>
                  
              </div>
              {/* right complete */}
          </div>
      </div>
  )
}







// export default function Casual (){
//   return (  
    
//       <main className='flex flex-col sm:flex-row justify-start  items-center space-x-6'>
//         <div className='w-full md:w-[295px] md:h-[1200px] h-full border rounded-[16px] justify-center '>
//             <AccordionDemo />
//             <SliderDemo />
//             <CheckboxDemo />

//             <Size />
//             <Styling />
//             {/* <Cart /> */}
//         </div>

//         <div className='w-full md:w-[900px] sm:h-[1200px] h-full'>
//         <CasualShirts />
//         </div>
//       </main>
    
//   )
// }


