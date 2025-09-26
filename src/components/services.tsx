import Image from "next/image";

export default function services(){
    return (
        // Este div se asegura de que la sección se renderice sobre el hero fijado
        <div className="relative z-10 lg:mt-100 mt-0 bg-white">
        
        <section className="services  w-full">
        <div className="flex flex-col justify-center lg:justify-left w-full h-screen items-center 
                 px-5 lg:px-15 ">
                    <h1 className="text-[3.2rem] lg:text-[7rem] font-bold 
                    lg:leading-30 lg:text-left text-center">UN SERVICIO COMPLETO</h1>
                    <p className="text-xl lg:text-[2.5rem] font-bold mt-5">Para nosotros, la arquitectura es la materialización de 
                        ideas que buscan no solo crear espacios funcionales, sino 
                        también enriquecer la vida de quienes los habitan. Nuestro objetivo
                         es ofrecer un alcance integral, abarcando desde el primer trazo
                          conceptual hasta la entrega final de la obra.</p>
                </div>

            <div className=" flex flex-col lg:flex-row justify-between items-center mt-0 lg:mt-50  w-full px-5 lg:px-15">
                <div>
                    <h1 className="text-[2.5rem] font-bold mb-5">
                        TE OFRECEMOS
                    </h1>
                    
                </div>
                
                <a href="#" className="bg-black text-white font-bold 
                 px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-black transition hover:scale-105 duration-500">
                   Consultar Servicios
                </a>
            </div>

            {/* Servicios + Imagen lado a lado en desktop */}
            <div className="mt-10 grid lg:grid-cols-2 gap-10 px-5 lg:px-20 items-stretch">
                {/* Columna servicios */}
                <div className="flex flex-col gap-10 justify-between">
                    <div className="service flex flex-col ">
                        <h1 className="text-xl font-bold border-black border-t pt-2">Diseñamos</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas, quia, voluptatibus, doloremque, quos, aspernatur. 
                        </p>
                    </div>
                    <div className="service flex flex-col ">
                        <h1 className="text-xl font-bold border-black border-t pt-2">Proyectamos</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas, quia, voluptatibus, doloremque, quos, aspernatur. 
                        </p>
                    </div>
                    <div className="service flex flex-col ">
                        <h1 className="text-xl font-bold border-black border-t pt-2">Construimos</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptas, quia, voluptatibus, doloremque, quos, aspernatur. 
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

        <div className="ContactSection relative mt-50 mb-50  lg:px-40 min-h-[600px] w-[90%] mx-auto
        rounded-2xl text-white flex flex-col justify-center overflow-hidden">
            <div className="inset-0 absolute z-10 bg-black/30 "></div>
            <Image
                src="/images/contactar.jpg"
                alt="Fondo de contacto"
                fill
                className="object-center -z-10"
            />
            <div className="relative z-10">
                <h1 className="text-[3rem] lg:text-[6rem] font-bold lg:leading-[7rem] 
                text-center lg:text-left">¿QUIERES CONTACTAR CON NOSOTROS?</h1>
                
                <div className="flex lg:flex-row flex-col gap-10 mt-5 items-center px-5 lg:items-start">
                    <a href="" className="bg-black text-white font-bold 
                    px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-black transition-transform hover:scale-105 duration-500">
                        Agenda con nosotros
                    </a>

                    <div className="flex space-x-5  ">
                        <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Fb</a>
                        <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Iag</a>
                        <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Gm</a>
                        <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Ws</a>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}