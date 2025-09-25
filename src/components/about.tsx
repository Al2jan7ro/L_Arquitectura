import Image from "next/image";
import VideoSection from "@/components/ui/video";

export default function About() {
  return (
    <section className="about  mb-50 w-full min-h-screen bg-[#282627] px-5 lg:px-10">

      <div className="descip flex flex-col lg:flex-row justify-between text-white mt-10 gap-6 lg:gap-10">
        <div className="flex-1">
          <p className="text-xl md:text-2xl lg:text-[2.2rem] w-full">
            L Arquitectura esta dedicado a plasmar tus proyectos
            Arquitectónicos sean pequeños o grandes, a través de
            todos sus fases de creación y en la cual nos esforzamo
            en todo el desarrollo, hasta lograr que la obra que se 
            asemeje a tus Sueños 
          </p>
        </div>
        
        <div className="abt-img relative overflow-hidden rounded-2xl w-full h-64 lg:w-1/2 lg:h-auto">
          <Image
            src="/images/abt-arq.jpg"
            alt="Equipo de LArquitectura trabajando en proyecto"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="quienessomos text-white flex flex-col items-center justify-center mt-50">
          <div className=" flex flex-col lg:flex-row justify-between items-center w-full">
              <h1 className="text-2xl md:text-3xl font-bold mb-5">
                  QUIENES SOMOS
              </h1>
              <a href="#" className="bg-black text-white font-bold 
              px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-black transition-colors mt-4 lg:mt-0">
                  Consultar Servicios
              </a>
          </div>

          <p className="text-xl md:text-2xl lg:text-[2.2rem] text-justify mt-10">
              Fundado por arquitecto Leo y el ingenero Luis, Nuestro estudio esta
              especializado en servicios profesionales de diseño y construcción de 
              proyectos arquitectónicos, donde podrás encontrar la solucion confiable
              que se ajuste a tu requerimiento.
          </p>
		  

		  <VideoSection />

      </div>
    </section>
  );
}