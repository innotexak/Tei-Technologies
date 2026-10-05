import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Process />
      <WhyUs />
    </>
  );
}
