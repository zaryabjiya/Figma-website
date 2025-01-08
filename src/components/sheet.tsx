"use client"

import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./navigationBar";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant={"secondary"}> 
            <GiHamburgerMenu/>
             </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="flex justify-center items-center" >Shop.co</SheetTitle>
            </SheetHeader>
          <ul >
            <li className="grid grid-cols-1 gap-y-3">
                <Link href={""}><NavigationMenuDemo/></Link>
                <Link className="ml-4" href={""}>On sale</Link>
                <Link className="ml-4" href={""}>New arrivals</Link>                                                              
                <Link className="ml-4" href={""}>Brands</Link>
            </li>
        </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}


