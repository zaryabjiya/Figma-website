import { AiOutlineMail } from "react-icons/ai";

export default function Uptodate(){
    return(
        <main className="w-full flex justify-center items-center mb-14 max-w-screen-2xl mx-auto ">
        <div className="w-[90%]   md:h-[150px] rounded-[16px] md:p-10 bg-black flex flex-col md:flex-row justify-between items-center ml-10 mr-10 md:mt-13 t-32 p-5  mt-8 ">
            <div className="w-full lg:w-[400px] ">
            <h1 className="text-xl text-white md:text-3xl font-serif font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>



        {/* // <main className="w-full flex justify-center items-center mb-14  t-32   mt-8 max-w-screen-2xl radius-[20px] mx-auto  ">
        //     <div className="w-[90%] md:w-full h-[180px] sm:h-[150px] rounded-[16px] p-32  bg-black flex flex-col md:flex-row justify-between items-center ">
        //         <div className="w-full lg:w-[200px] space-between ">
        //         <h1 className="text-2xl text-white md:text-3xl font-serif font-extrabold ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1> */}

                </div>
                <div className="space-y-4 mt-2">
                <div className="  flex justify-start items-center bg-[#F0F0F0] md:w-[300px] h-[35px] pl-2 md:ml-0 hover:border-none rounded-full"> 
                <AiOutlineMail /> 
                <input   placeholder={`Enter your email address`}  className="bg-[#F0F0F0] w-[90%] rounded-full h-full ml-2"/></div>
                <button className="w-full text-sm border bg-white py-2 px-10 rounded-[20px]" >Subscribe to Newsletter</button>
                </div>
            </div>
        </main>
    )
}

// ml-10 mr-10 md:mt-13 t-32   mt-8 
