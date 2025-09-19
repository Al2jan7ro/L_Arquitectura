export default function services(){
    return (
        <>
        <section className="services mt-50 w-full">
            <div className="justify-between flex items-center w-full px-15">
                <div>
                    <h1 className="text-2xl font-bold">
                        Te ofrecemos
                    </h1>
                    
                </div>
                
                <a href="#" className="bg-black text-white font-bold 
                 px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-black transition-colors">
                    Consultar Servicios
                </a>
            </div>

            <div className="flex lg:flex-row flex-col gap-10 mt-10 px-20">
                <div className="service flex flex-col items-center justify-center
                bg-black/70 rounded-xl text-white p-7 ">
                    <h1 className="text-xl font-bold">
                        Diseñamos
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus.
                    </p>
                </div>
                <div className="service flex flex-col items-center justify-center
                 bg-black/70 rounded-xl text-white p-7">
                    <h1 className="text-xl font-bold">
                        Proyectamos
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus.
                    </p>
                </div>
                <div className="service flex flex-col items-center justify-center
                bg-black/70 rounded-xl text-white p-7">
                    <h1 className="text-xl font-bold">
                        Construimos
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus, dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus dolorem, quisquam, voluptatem, asperiores, 
                        voluptas, quia, voluptatibus, doloremque, quos, aspernatur, 
                        doloribus.
                    </p>
                </div>
            </div>
        </section>

        <div className="ContactSection mt-50 mb-50 px-8 lg:px-40 min-h-[600px] w-[90%] mx-auto
        rounded-2xl bg-gray-400 text-black flex flex-col justify-center">
            <h1 className="text-[3rem] lg:text-[6rem] font-bold  lg:leading-[7rem] 
            text-center lg:text-left">¿Quieres contactar con nosotros?</h1>
            
            <div className="flex lg:flex-row flex-col gap-10 mt-5 items-center lg:items-start">
                <a href="" className="bg-black text-white font-bold 
                px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-black transition-colors">
                    Agenda con nosotros
                </a>

                <div className="flex space-x-8">
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Fb</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Ig</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Gm</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Ws</a>
                </div>
            </div>
        </div>

        </>
    );
}