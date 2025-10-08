import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
export default function hero() {
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
                <div className="hero-content relative z-10 flex flex-col
                 items-center justify-center h-full text-center">
                    <h1 className="text-[2.6rem] lg:text-[5rem] font-bold items-center
                     mt-30 px-5 lg:px-30">WE LOOK BEYOND THE ARCHITECTURE</h1>
                    <SocialLinks className="text-white" />
                    <div className="w-50 h-50 relative mt-4">
                        <Image
                            src="/images/logoB.png"
                            alt="Logo de la empresa LArquitectura, Venezuela - Barquisimeto"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </main>
        </>
    );
}