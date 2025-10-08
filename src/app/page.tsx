import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Partners from "@/components/partners";
import ParallaxContainer from "@/components/ui/ParallaxContainer";
import { Metadata } from "next";
import { generateSeoMetadata } from "@/data/SEO";
import { HOME_SEO } from "@/data/seo-constants";

export function generateMetadata(): Metadata {
  return generateSeoMetadata(HOME_SEO);
}

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
