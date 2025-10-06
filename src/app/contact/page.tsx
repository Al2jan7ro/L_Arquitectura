import SocialLinks from '@/components/ui/SocialLinks';
import ContactForm from '@/components/ui/contactForm';
import { BusinessHours } from "@/components/ui/horarios"
import Image from 'next/image';

export default function ContactPage() {
    return (
        <>
            <section className="w-full flex flex-col bg-white white-section ">
                {/* Texto arriba */}
                <div className="flex flex-col items-start justify-center px-5 lg:px-15 mt-40 lg:mt-60">
                    <h1 className="text-[3.2rem] lg:text-[7rem] text-center lg:text-left
                     lg:leading-30 font-bold mb-6">
                        CONSULTA Y AGENDA TU CITA
                    </h1>
                    <p className="text-xl lg:text-[2.5rem] font-bold mb-8">
                        Comience hoy mismo el desarrollo de su proyecto arquitectónico
                        o civil. En L Arquitectura estamos listos para escuchar sus
                        requerimientos y convertir sus ideas en planos ejecutables.
                        Contáctenos para agendar una consulta en nuestra sede o
                        envíenos su solicitud directamente a través de nuestro formulario.
                    </p>
                </div>

                {/* Imagen con gradiente abajo */}
                <div className="relative w-full h-[300px] px-5 lg:px-8 mb-12 mt-4">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <Image
                            src="/images/contactimg.jpg"
                            alt="Imagen de fondo, pagina de contacto"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-10 z-10">
                        </div>
                    </div>
                </div>

                {/* Información de contacto y redes */}
                <div className="w-full px-5 lg:px-15 mt-50">
                    <div className="border-t-2 border-b-2 border-black py-8 px-5 flex justify-center">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-start w-full max-w-7xl lg:px-8 mb-8">
                            <div className="flex flex-col items-start">
                                <h2 className="font-bold text-3xl mb-4 uppercase">¿DÓNDE ESTAMOS?</h2>
                                <p className="text-2xl font-['Roboto']">Nuestra oficina principal está ubicada en:</p>
                                <p className="text-2xl font-semibold mt-2 font-['Roboto']">Barquisimeto, Venezuela</p>
                                <p className="text-lg text-gray-600 mt-1 font-['Roboto']">¡Visítanos para una atención personalizada!</p>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="font-bold text-3xl mb-4 uppercase">SÍGUENOS EN REDES SOCIALES</h2>
                                <p className="text-2xl mb-4 font-['Roboto']">Mantente conectado y conoce más sobre nuestros proyectos:</p>
                                <SocialLinks />
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="font-bold text-3xl mb-4 uppercase">CONTACTO DIRECTO</h2>
                                <p className="text-2xl font-semibold font-['Roboto']">Ing. Leonardo Pérez</p>
                                <p className="text-xl font-['Roboto']">Correo: <a href="mailto:leo.perez@email.com" 
                                className="text-black underline font-['Roboto']">leo.perez@email.com</a></p>
                                <p className="text-xl mb-4 font-['Roboto']">Teléfono: <a href="tel:+584141234567" 
                                className="text-black underline font-['Roboto']">+58 414 1234567</a></p>

                                <p className="text-2xl font-semibold font-['Roboto']">Ing. Luis Rodríguez</p>
                                <p className="text-xl font-['Roboto']">Correo: <a href="mailto:luis.rodriguez@email.com" 
                                className="text-black underline">luis.rodriguez@email.com</a></p>
                                <p className="text-xl font-['Roboto']">Teléfono: <a href="tel:+584241234567" 
                                className="text-black underline font-['Roboto']">+58 424 1234567</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Horario de atención */}
                <BusinessHours />
                {/* Formulkario de contacto */}
                <ContactForm />
                
            </section>
        </>
    );
}