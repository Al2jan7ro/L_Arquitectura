import Image from "next/image";
import VideoSection from "@/components/ui/video";
import {roboto} from "@/components/ui/fonts"
export default function About() {
  return (
    <>
      <section className="about w-full min-h-screen bg-[#282627] px-5 lg:px-10 py-10 flex items-center justify-center">
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

      <section className="quienessomos text-black mt-20 mb-50 flex flex-col items-center justify-center px-5 lg:px-10">
          <div className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                    QUIENES SOMOS
                </h2>
                <a href="#" className={`px-6 py-2 rounded-xl
                 text-white font-bold hover:bg-gray-200 bg-black
                hover:text-black hover:scale-105 duration-500 ml-5 ${roboto.className}`}>
                    Consultar Servicios
                </a>
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