
import { FaPlus } from "react-icons/fa6";

export default function Alert() {
  return (
    <main className="bg-black w-full h-[38px] text-white flex justify-center items-center max-w-screen-2xl mx-auto">
        <div className="flex space-x-2 items-center">
            <h3 className="text-white text-[8px]  md:text-sm">Sign up and get 20% off on your first order. </h3>
            <button className="underline underline-offset-4 text-xs  md:text-sm">Sign up Now</button>
        </div>
        <span className="text-white absolute right-[100px] text-xl hidden md:block">
            <FaPlus />
        </span>
    </main>
  );
}
