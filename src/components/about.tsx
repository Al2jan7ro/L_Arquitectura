import Image from "next/image";
import Link from "next/link";
import VideoSection from "@/components/ui/video";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export default function About() {
  return (
    <>
      <section className="about mt-50 w-full min-h-screen bg-[#282627] px-5 lg:px-15 py-10 flex items-center justify-center">
        <div className="descip flex flex-col lg:flex-row justify-between text-white gap-6 lg:gap-10">
          <div className="flex-1">
            <p className="text-xl md:text-2xl lg:text-[2.2rem] w-full">
              L Arquitectura esta dedicado a plasmar tus proyectos
              Arquitectónicos sean pequeños o grandes, a través de
              todos sus fases de creación y en la cual nos esforzamos
              en todo el desarrollo, hasta lograr que la obra que se
              asemeje a tus Sueños.
            </p>
          </div>

          <div className="abt-img relative overflow-hidden rounded-2xl w-full
           h-64 lg:w-1/2 lg:h-auto min-h-[300px]">
            <Image
              src="/images/abt-arq.jpg"
              alt="Equipo de LArquitectura trabajando en proyecto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="quienessomos text-black mt-20  flex flex-col items-center justify-center px-5 lg:px-15">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full">
            <h2 className="text-[2.5rem] font-bold mb-5 lg:text-left text-center">
              QUIENES SOMOS
            </h2>
            <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="group border-foreground cursor-pointer text-lg
                            text-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
            >
                Explora nuestros proyectos
             
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <p className="text-xl md:text-2xl lg:text-[2.2rem] text-left">
              Fundado por el arquitecto Leo y el ingeniero Luis, nuestro estudio está especializado en servicios profesionales de diseño y construcción de proyectos arquitectónicos, donde podrás encontrar la solución confiable que se ajuste a tu requerimiento.
            </p>
            <VideoSection src="/assets/video.mp4" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
}