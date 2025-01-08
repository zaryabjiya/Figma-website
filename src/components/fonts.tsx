import { Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat,} from "next/font/google";

const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({subsets:["latin"]});
const Prat = Prata({subsets:["latin"],weight: "400"});
const Montserra = Montserrat({subsets:["latin"]});


export default function Fonts (){
  return (
    <div className="bg-black h-[100px] max-w-screen-2xl mx-auto w-full px-9 flex md:justify-between items-center justify-center space-x-4 flex-wrap">
        <h1 className={`${Playfair.className} md:text-4xl text-2xl  text-white font-bold`}>VERCASE</h1>
        <h1 className={`${Cinze.className} md:text-4xl text-2xl text-white font-bold`}>ZARA</h1>
        <h1 className={`${Bodoni.className} md:text-4xl text-2xl text-white font-bold`}>GUCCI</h1>
        <h1 className={`${Prat.className} md:text-4xl text-2xl text-white font-extrabold`}>PRADA</h1>
        <h1 className={`${Montserra.className} md:text-4xl text-2xl text-white`}>Calvin Klein</h1>
    </div>
  )
}



