import Hero from "@/components/hero";
import Services from "@/components/services";
import  About from "@/components/about";
import Partners from "@/components/partners";
import ParallaxContainer from "@/components/ui/ParallaxContainer";

export default function Home() {
  return (
    <>
      <ParallaxContainer className="w-full">
        <Hero />
        <Services />
      </ParallaxContainer>
      <About />
      <Partners />
    </>
  );
}
