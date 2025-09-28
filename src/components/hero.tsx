import Image from "next/image";
import Link from "next/link";
import {roboto} from "@/components/ui/fonts"
export default function hero(){
    return (
        <>
            {/* Contenedor principal que será "pineado" por GSAP */}
            <main className="hero relative w-full h-screen text-white overflow-hidden">
                <video
                    className="hero-video absolute inset-0 w-full h-full object-cover -z-20"
                    src="/assets/herovideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                
                {/* Todo el contenido que se animará va dentro de 'hero-content' */}
                <div className="hero-content relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <p className="text-[2.6rem] lg:text-[5rem] font-bold items-center mt-30 px-5 lg:px-30">WE LOOK BEYOND THE ARCHITECTURE</p>
                    
                    <div className="flex items-center justify-center mt-5">
                        <Link href="/contact" className={`px-6 py-2 rounded-xl bg-white
                         text-black font-bold hover:bg-gray-200
                        hover:text-black transition hover:scale-105 duration-500 ml-5 ${roboto.className}`}>Contacto</Link>

                        <Link href="/projects" className={`px-6 py-2 rounded-xl bg-white
                         text-black font-bold hover:bg-gray-200
                        hover:text-black transition hover:scale-105 duration-500 ml-5 ${roboto.className}`}>Proyectos</Link>
                    </div>
                    
                    <div className="w-40 h-40 relative mt-4">
                        <Image
                            src="/images/logoB.png"
                            alt="Logo de la empresa LArquitectura, Venezuela - Barquisimeto"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </main>
        </>
    );
}