import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Partners() {
    return (

        <>
            <div className="flex flex-col justify-center lg:justify-left w-full h-screen 
                px-5 lg:px-15 ">
                <h1 className="text-[3.2rem] lg:text-[6rem] font-bold 
                    lg:leading-30 lg:text-left text-center">CONOCE SOBRE NUESTROS SOCIOS</h1>
                <p className="text-xl lg:text-[2rem] text-muted-foreground font-light mt-5">
                    En LAarquitectura, creemos que el éxito de cada proyecto se basa en la colaboración.
                    Por eso, nos asociamos con empresas líderes y profesionales que comparten nuestra visión
                    de excelencia, innovación y rigor técnico.
                </p>
            </div>

            <section
                className="relative w-[90%] mx-auto mb-20 grid gap-10 lg:grid-cols-2 items-center 
                bg-yellow-50 p-10 rounded-2xl shadow-sm "
            >

                {/* Columna de texto */}
                <div className="space-y-5 flex flex-col items-center lg:items-start">

                    <p className="text-[#1a1a1a] text-base md:text-lg lg:text-[1.3rem]  
                    leading-relaxed text-center lg:text-left">
                        <span className="font-semibold">Gavioty Pro Solutions (GPS)</span> es nuestro socio principal
                        en soluciones estructurales, liderado por el Gerente General
                        Licenciado Arquímedes Velásquez Díaz. Son expertos en gaviones y muros de
                        retención sostenibles con tecnología certificada para la estabilización
                        de terrenos. <span className="font-semibold">LAarquitectura</span> integra su diseño con la
                        precisión técnica de GPS, garantizando la estabilidad y calidad de la obra.
                        Colaboramos en grandes proyectos de infraestructura, control de erosión y
                        paisajismo complejo.
                    </p>

                    {/* Botón */}
                    <a
                        href="https://gpsprocr.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-fit inline-flex items-center justify-center gap-2 lg:absolute
                         text-center bottom-10 left-10 px-6 py-2 rounded-lg hover:bg-black mt-5 
                          border-black border text-black font-bold bg-transparent transition-all
                           duration-300 font-['roboto'] hover:text-white"
                    >
                        Visitar Gavioty
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Columna de imagen */}
                <div className="relative w-full h-[300px] lg:h-[400px] flex items-center justify-center">
                    <Image
                        src="/images/gaviobox.jpg"
                        alt="Logo de Gavioty Pro Solutions, aliado de laarquitectura"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </section>

            <section
                className="relative w-[90%] mx-auto mb-20 mt-20 grid gap-10 lg:grid-cols-2 items-center 
                bg-yellow-50 p-10 rounded-2xl shadow-sm "
            >

                {/* Columna de texto */}
                <div className="space-y-5 flex flex-col items-center lg:items-start lg:order-2">
                    
                    <p className="text-[#1a1a1a] text-base md:text-lg lg:text-[1.3rem]  
                    leading-relaxed text-center lg:text-left ">
                        <span className="font-semibold">Ingeniería SAECA C.A.</span>, bajo la dirección del Ing.
                         Civil Saúl El Chaer, es nuestro socio constructor de confianza.
                          Su especialización en la ejecución de obras civiles y estructuras 
                          de ingeniería de campo aporta la solidez técnica indispensable para
                           materializar nuestros diseños. En <span className="font-semibold">LAarquitectura</span>,
                            asumimos la Gerencia de Obra, creando una sinergia 
                            donde nuestra supervisión y la precisión de SAECA convergen para asegurar
                             la máxima calidad y el éxito de cada proyecto, desde su concepción hasta
                             la entrega final.
                    </p>

                    {/* Botón */}
                    <a
                        href="https://www.instagram.com/ingenieriasaeca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-fit inline-flex items-center justify-center gap-2 lg:absolute
                         text-center bottom-10 right-10 px-6 py-2 rounded-lg hover:bg-black mt-5 
                          border-black border text-black font-bold bg-transparent transition-all
                           duration-300 font-['roboto'] hover:text-white"
                    >
                        Visitar SAECA
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Columna de imagen */}
                <div className="relative w-full h-[300px] lg:h-[400px] flex items-center justify-center lg:order-1">
                    <Image
                        src="/images/logosaeca.jpg"
                        alt="Logo de la empresa ingeniería SAECA, aliado de laarquitectura"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-32 border-t border-border">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
                        ¿Tienes un proyecto en mente?
                    </h2>
                    <p className="text-lg text-muted-foreground font-light mb-10">
                        Transformemos tu visión en realidad arquitectónica
                    </p>
                    <Link href="/contact">
                        <Button
                            size="lg"
                            variant="outline"
                            className="font-['roboto'] border-foreground text-foreground
                             hover:bg-foreground hover:text-background transition-all 
                             duration-300 bg-transparent"
                        >
                            Contacta con nosotros
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
