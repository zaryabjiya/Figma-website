import { Check } from "lucide-react";
import { IoIosStar } from "react-icons/io";
import { Button } from "./ui/button";
const allReviews = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",

    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",

    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"Posted on August 14, 2023",

    },
    {
      name: "Michael B.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",

    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
        name: "Samantha D.",
        feedback:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 5,
        verified: true,
        date:"Posted on August 14, 2023",
      },
  ];

  let rating = [<IoIosStar key={1} />,
<IoIosStar key={2} />,
<IoIosStar key={3} />,
<IoIosStar key={4} />,
<IoIosStar key={5} />
];

export default function reviews(){
  return (
    <main className=" max-w-screen-2xl mx-auto">
        <div className="px-5 flex justify-between ">
    <h1 className="text-2xl mt-3">All Reviews</h1>
    <div className="space-y-3">
    <Button variant={"outline"} className="hidden sm:flex md:block ">Latest</Button>
    <Button>Write Now Review</Button>
    </div>
        </div>

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  px-5 mt-3 md:mt-0">
                {
                    allReviews.map((detail, index) => {  
                    return(
                        <div className="border p-5 rounded-[20px]" key={index}>
                            <p className="text-yellow-400 flex">{rating}</p>
                            <h2 className="font-bold mt-1 flex text-sm">{detail.name} 
                            {detail.verified && (
                            <Check className="bg-green-600 w-3 h-3 mt-1 rounded-full text-white "/> 
                            )}
                            </h2>
                            <p className="text-sm">{detail.feedback}</p>
                            <p className="mt-5 text-gray-500">{detail.date}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>

    </main>
  )
}


