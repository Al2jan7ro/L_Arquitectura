import Image from "next/image";
import { Metadata } from "next";
import { generateSeoMetadata } from "@/data/SEO";
import { SERVICES_SEO } from "@/data/seo-constants";
import VideoSection from "@/components/ui/video";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function generateMetadata(): Metadata {
  return generateSeoMetadata(SERVICES_SEO);
}

export default function Services() {
  return (
    <section className="white-section w-full flex flex-col items-center bg-white justify-center mb-50">

      <div className="flex flex-col justify-center lg:justify-left w-full h-screen
                px-5 lg:px-15 lg:mt-20">
        <h1 className="text-[3.2rem] lg:text-[6rem] font-bold 
                    lg:leading-30 lg:text-left text-center">NUESTRO SERVICIO</h1>
        <p className="text-xl lg:text-[2rem] font-bold mt-5 text-muted-foreground">
          Nuestra cartera de servicios está diseñada para la gestión integral de
          proyectos de arquitectura y obras civiles. Como su socio estratégico,
          cubrimos desde la ingeniería conceptual hasta la ejecución constructiva
          y la entrega final, garantizando funcionalidad, estética y viabilidad presupuestaria.
        </p>
      </div>

      <div className="w-full h-screen">

        <VideoSection src="/assets/servicesVideo.mp4" className="w-[90%] mx-auto h-full object-cover" />

      </div>

      <div className="w-full mt-50 px-5 lg:px-15 ">
        {/* ARQUITECTURA */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5">ARQUITECTURA</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Desarrollamos proyectos arquitectónicos innovadores, funcionales y adaptados a las necesidades del cliente. Cada diseño busca equilibrar estética, confort y eficiencia, garantizando espacios habitables que integren la creatividad con la técnica constructiva.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Descubre cómo transformamos ideas en espacios funcionales
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Diseño arquitectónico residencial, comercial e institucional. <br />
                • Elaboración de planos conceptuales, básicos y de construcción. <br />
                • Análisis de espacio, iluminación natural, ventilación y confort térmico. <br />
                • Diseño interior y planificación de mobiliario. <br />
                • Asesoría en materiales, acabados y tendencias arquitectónicas.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* ESTRUCTURA */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5 border-t-2 border-black mt-20">ESTRUCTURA</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Ofrecemos soluciones estructurales seguras, eficientes y adaptadas a los requerimientos arquitectónicos y normativos. Nuestros cálculos estructurales garantizan la estabilidad, resistencia y durabilidad de cada proyecto.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Conoce cómo aseguramos la estabilidad de tu proyecto
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Cálculo y diseño de estructuras de concreto armado, acero y mixtas. <br />
                • Elaboración de planos estructurales detallados. <br />
                • Modelado estructural con software especializado. <br />
                • Evaluación estructural de edificaciones existentes. <br />
                • Asesoría técnica para optimización de materiales y costos.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* ELECTRICIDAD */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5 border-t-2 border-black mt-20">ELECTRICIDAD</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Diseñamos y planificamos instalaciones eléctricas seguras, eficientes y adaptadas a las normas vigentes, asegurando el correcto funcionamiento de los sistemas eléctricos tanto en proyectos residenciales como comerciales e industriales.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Explora las soluciones eléctricas que impulsan tus espacios
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Diseño de redes eléctricas de baja y media tensión. <br />
                • Cálculo de cargas eléctricas y distribución de circuitos. <br />
                • Planos eléctricos y diagramas unifilares. <br />
                • Sistemas de iluminación interior y exterior. <br />
                • Instalación de sistemas de puesta a tierra y protección contra sobretensiones.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* HIDROSANITARIOS */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5 border-t-2 border-black mt-20">HIDROSANITARIOS</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Desarrollamos proyectos hidrosanitarios eficientes y sostenibles, garantizando el abastecimiento de agua potable, el manejo adecuado de aguas residuales y pluviales, y el cumplimiento de normativas ambientales.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Descubre cómo optimizamos los sistemas de agua en tus proyectos
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Diseño de sistemas de agua potable y redes de distribución. <br />
                • Diseño de sistemas de aguas negras y pluviales. <br />
                • Planos hidrosanitarios detallados. <br />
                • Cálculo hidráulico y selección de equipos. <br />
                • Integración de sistemas sostenibles y reutilización de aguas.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* MECÁNICAS */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5 border-t-2 border-black mt-20">MECÁNICAS</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Diseñamos sistemas mecánicos que garantizan el confort y la eficiencia energética de los espacios, integrando tecnologías de climatización, ventilación y control ambiental de acuerdo con las necesidades del proyecto.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Explora las soluciones que mejoran el confort y la eficiencia
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Diseño de sistemas HVAC (calefacción, ventilación y aire acondicionado). <br />
                • Sistemas de extracción y ventilación mecánica. <br />
                • Control de temperatura y humedad. <br />
                • Integración con sistemas eléctricos y arquitectónicos. <br />
                • Asesoría en eficiencia energética y sostenibilidad.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CONSTRUCCIÓN */}
        <h1 className="text-[2rem] lg:text-[5rem] font-bold mb-5 border-t-2 border-black mt-20">CONSTRUCCIÓN</h1>
        <p className="text-lg lg:text-2xl mb-10">
          Ejecutamos obras con altos estándares de calidad, controlando cada etapa del proceso constructivo. Garantizamos cumplimiento en plazos, costos y especificaciones técnicas, con un enfoque integral que combina planificación y supervisión continua.
        </p>
        <Accordion type="single" collapsible className="w-full bg-yellow-50 p-5 rounded-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl lg:text-4xl font-semibold text-left">
              Conoce cómo hacemos realidad cada proyecto con calidad y precisión
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-lg lg:text-2xl">
                • Ejecución de obras civiles y arquitectónicas. <br />
                • Supervisión técnica y control de calidad. <br />
                • Planificación y programación de obra. <br />
                • Gestión de materiales y recursos. <br />
                • Control de costos y tiempos de ejecución. <br />
                • Remodelaciones, ampliaciones y mantenimiento.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>


      <section className="w-[90%] mx-auto grid lg:grid-cols-2 gap-10 items-center
         bg-yellow-50 p-10 px-5 lg:px-15  relative my-20">
        {/* Columna de texto */}
        <div>
          <p className="text-black text-xl md:text-2xl lg:text-[1.6rem] font-500 text-left">
            En LAarquitectura, la <strong>Metodología BIM (Building Information Modeling)</strong>
            es nuestro estándar para la excelencia operativa. Este enfoque integral
            genera modelos digitales inteligentes que cubren desde el diseño conceptual
            hasta la ejecución. Implementamos BIM para garantizar la detección temprana
            de conflictos, la optimización de recursos y una gestión precisa que se traduce
            en proyectos más rentables y eficientes para el cliente.
          </p>
        </div>

        {/* Columna de imagen */}
        <div className="relative rounded-2xl overflow-hidden h-full min-h-[300px] lg:min-h-[500px]">
          <Image
            src="/images/bimservices.jpg"
            alt="Imagen de arquitectura para mostrar los servicios de la empresa LArquitectura"
            fill
            className="object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <a
          href="/contact"
          
          className="group w-fit inline-flex items-center justify-center gap-2 lg:absolute
                         text-center bottom-10 left-10 px-6 py-2 rounded-lg hover:bg-black mt-5 
                          border-black border text-black font-bold bg-transparent transition-all
                           duration-300 font-['roboto'] hover:text-white"
        >
          Contacta con nosotros
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>
      </section>


    </section>

  );
}   