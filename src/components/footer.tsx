export default function footer(){
    return (
        <footer className="footer bg-black flex flex-col text-white w-full py-8 px-7 lg:px-8">
            {/* Contenido principal del footer */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                <div className="flex flex-col items-center lg:items-start justify-center 
                text-center lg:text-left mb-6 lg:mb-0 lg:ml-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
                        SOMOS TU SOLUCIÓN CONFIABLE
                    </h1>
                    <p className="text-sm sm:text-base lg:text-xl mb-6 max-w-md">
                        Contactanos para mas información, cotizaciones
                        y consultas acerca de nuestros servicios
                    </p>
                    <div className="">
                        <a href="#" className="bg-white text-black font-bold 
                         px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors">
                            Contacto
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:gap-5 lg:mr-20 mt-10">
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Fb</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Ig</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Gm</a>
                    <a href="#" className="bg-gray-500 px-4 py-4 rounded-full hover:bg-gray-600 transition-colors text-center">Ws</a>
                </div>
            </div>

            <div className="text-sm lg:text-lg text-center lg:text-left">
                <p className="ml-10">Desarrollado por Al2jan7ro. @2025 todos los derechos reservados.</p>
            </div>
        </footer>
    );
}