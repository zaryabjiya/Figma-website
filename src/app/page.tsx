import Hero from "@/components/hero";
import Fonts from "@/components/fonts";
import Products from "./products-detail/page";
import Sells from "./products-detail/top-sell";
import Dstyle from "@/app/brands/page";
import CustomerCarousel from "@/components/customers-reviews";
import { NavigationMenuDemo } from "@/components/navigationBar";


export default function Home() {
  return (
    <div>
      <Hero />
      <Fonts />
      <Products />
      <Sells />
      <Dstyle />
      <CustomerCarousel />
      <NavigationMenuDemo />
    </div>
  );
}
