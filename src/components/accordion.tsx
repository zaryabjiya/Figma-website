import { Filter } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
        <div className="p-5 ">
            <div className="flex justify-between items-start">
            <h1 className="font-bold">Filters</h1>
            <Filter />
            </div>
      <Accordion type="single" collapsible className="w-full sm:w-full mt-7">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hoodie</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Jeans</AccordionTrigger>
          <AccordionContent>
            Yes. It&#39;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  