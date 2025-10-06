import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function services() {
    return (
        // Este div se asegura de que la sección se renderice sobre el hero fijado
        <div className="relative z-10 lg:mt-100 mt-0 bg-white">

            <section className="services  w-full">
                <div className="flex flex-col justify-center lg:justify-left w-full h-screen items-center 
                 px-5 lg:px-15 ">
                    <h1 className="text-[3.2rem] lg:text-[6rem] font-bold 
                    lg:leading-30 lg:text-left text-center">UN SERVICIO COMPLETO</h1>
                    <p className="text-xl lg:text-[2rem] text-muted-foreground font-light mt-5 ">Para nosotros, la arquitectura es la materialización de
                        ideas que buscan no solo crear espacios funcionales, sino
                        también enriquecer la vida de quienes los habitan. Nuestro objetivo
                        es ofrecer un alcance integral, abarcando desde el primer trazo
                        conceptual hasta la entrega final de la obra.</p>
                </div>

                <div className=" flex flex-col lg:flex-row justify-between 
            items-center mt-0 lg:mt-50  w-full px-5 lg:px-15">
                    <div>
                        <h1 className="text-[2.5rem] font-bold mb-5 lg:text-left text-center">
                            TE OFRECEMOS
                        </h1>

                    </div>

                    <div>
                     <Link href="/services">
                     
                        <Button
                            variant="outline"
                            size="lg"
                            className="group border-foreground cursor-pointer text-lg
                            text-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                        >
                                Consultar servicios
        
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        </Link>
                    </div>
                </div>

                {/* Servicios + Imagen lado a lado en desktop */}
                <div className="mt-10 grid lg:grid-cols-2 gap-10 px-5 lg:px-20 items-stretch">
                    {/* Columna servicios */}
                    <div className="flex flex-col gap-10 justify-between">
                        <div className="service flex flex-col ">
                            <h1 className="text-xl font-bold border-black border-t pt-2">Diseñamos soluciones arquitectónicas</h1>
                            <p className="text-md text-muted-foreground font-light ">
                            Equilibramos la estética innovando con funcionalidad operativa.
                             Transformamos sus ideas en planos detallados, optimizando cada metro 
                             cuadrado para lograr espacios únicos que inspiran, cumplen su propósito
                              y superan las expectativas iniciales.
                            </p>
                        </div>
                        <div className="service flex flex-col ">
                            <h1 className="text-xl font-bold border-black border-t pt-2">Proyectamos la viabilidad y la ejecución de su obra.</h1>
                            <p className="text-md text-muted-foreground font-light">
                            Nuestra gestión incluye la planificación integral, el análisis de estructuras
                             y la definición de materiales, asegurando que cada proyecto sea sólido, eficiente 
                             y cumpla rigurosamente con los estándares técnicos y normativos.
                            </p>
                        </div>
                        <div className="service flex flex-col ">
                            <h1 className="text-xl font-bold border-black border-t pt-2">Construimos</h1>
                            <p className="text-md text-muted-foreground font-light">
                            Trabajamos Con una maestría que garantiza la excelencia desde la cimentación hasta el 
                            último detalle. Llevamos a la realidad la visión arquitectónica mediante una
                             ejecución eficiente y el control de calidad riguroso, entregando proyectos llave
                              en mano que son duraderos, funcionales y finalizados dentro del plazo estipulado.
                            </p>
                        </div>
                    </div>

                    {/* Columna imagen */}
                    <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px]">
                        <Image
                            src="/images/landing2.jpg"
                            alt="Imagen de arquitectura para mostrar los servicios de la empresa LArquitectura"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

        </div>
    );
}