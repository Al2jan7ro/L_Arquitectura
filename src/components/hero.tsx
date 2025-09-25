import Image from "next/image";
export default function hero(){
    return (
        <>
            <main className="hero relative flex flex-col items-center w-full
            justify-center h-screen text-white overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover -z-20"
                    src="/images/herovideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="relative z-10 items-center justify-center flex flex-col text-center">
                      
                    <p className="text-[3rem] lg:text-[5rem] font-bold items-center mt-30 px-5 lg:px-30">WE LOOK BEYOND THE ARCHITECTURE</p>
                </div>

                <div className="relative z-10 flex items-center justify-center mt-5">
                    <a href="" className="px-6 py-2 rounded-xl
                     bg-white text-black font-bold">Contacto</a>
                    <a href="" className="px-6 py-2 rounded-xl
                     bg-white text-black font-bold ml-5">Proyectos</a>
                </div>
                <div className="w-50 h-50 relative ">
                            <Image
                                src="/images/logoB.png"
                                alt="Logo de la empresa LArquitectura, Venezuela - Barquisimeto"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
            </main>
            <section className="w-full">
                <div className="flex items-center justify-center text-white
                bg- w-full py-15">
                    <h1 className="text-4xl font-bold">Un servicio completo</h1>
                </div>
            </section>
        </>
    );
}