export default function hero(){
    return (
        <>
            <main className="hero flex flex-col items-center w-full
            justify-center h-screen bg-gray-700 text-white">
                <div className="items-center justify-center flex flex-col">
                    <h1 className="text-[4rem] font-bold">LArquitectura</h1>
                    <p className="text-lg items-center justify-center">Sitio web de la empresa LArquitectura 
                        en barquisimeto venezuela</p>
                </div>

                <div className="flex items-center justify-center mt-5">
                    <a href="" className="px-6 py-2 rounded-xl
                     bg-white text-black font-bold">Contacto</a>
                    <a href="" className="px-6 py-2 rounded-xl
                     bg-white text-black font-bold ml-5">Proyectos</a>
                </div>

            </main>
            <section className="w-full">
                <div className="flex items-center justify-center text-white
                bg-gray-500 w-full py-15">
                    <h1 className="text-4xl font-bold">Un servicio completo</h1>
                </div>
            </section>
        </>
    );
}