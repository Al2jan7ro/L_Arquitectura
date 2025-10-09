import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Linkedin, Globe } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Left section with logo and CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <Image src="/images/logoB.png" 
              alt="Logo de la empresa LAarquitecutra, empresa de venezuela barquisaimeto, Estado Lara"
               width={140} 
               height={70} 
               className="object-contain w-auto h-auto" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              SOMOS TU SOLUCIÓN
              <br />
              CONFIABLE
            </h2>

            <p className="text-base text-white mb-6 max-w-md leading-relaxed font-['Roboto']">
              Contáctanos para más información, cotizaciones y consultas acerca de nuestros servicios
            </p>

            <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-white text-lg cursor-pointer  text-white
                  hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                >
                  Agenda con nosotros
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

          </div>

          {/* Center section with navigation */}
          <div className="lg:col-span-4 flex flex-col justify-center font-['Roboto']">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navegación</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-lg hover:text-gray-300 transition-colors duration-200">
                Servicios
              </Link>
              <Link href="/projects" className="text-lg hover:text-gray-300 transition-colors duration-200">
                Proyectos
              </Link>
              <Link href="/contact" className="text-lg hover:text-gray-300 transition-colors duration-200">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Right section with social media */}
          <div className="lg:col-span-3 flex flex-col justify-center lg:items-end">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Síguenos</h3>
            <div className="flex gap-3">

              <a
                href="https://www.instagram.com/leo.luis.arquitectura/?hl=es-la"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=leo.henry.asociados@gmail.com&su=Consulta%20de%20Proyecto:%20¡Transformemos%20tu%20visión%20con%20LArquitectura!&body=Hola%20equipo%20de%20LArquitectura,%0A%0AMe%20interesa%20conocer%20más%20sobre%20sus%20servicios%20para%20un%20proyecto%20que%20tengo%20en%20mente.%20¿Podrían%20proporcionarme%20más%20detalles%20o%20indicarme%20los%20próximos%20pasos?%0A%0AGracias."
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/584267779108?text=¡Hola!%20Me%20gustaría%20explorar%20cómo%20LArquitectura%20puede%20ayudarme%20con%20mi%20próximo%20proyecto.%20¿Podemos%20conversar?"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <p className="text-md text-white font-['roboto']">Desarrollado por Al2jan7ro</p>
            <a href="https://www.linkedin.com/in/al2jan7ro" 
            target="_blank" 
            rel="noopener noreferrer"
             aria-label="LinkedIn de Al2jan7ro"
             className="text-white hover:text-gray-500 transition-colors">
                <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://al2jan7ro.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Portafolio de Al2jan7ro" 
            className="text-white hover:text-gray-500 transition-colors">
                <Globe className="w-5 h-5" />
            </a>
          </div>
          <p className="text-md text-white font-['roboto'] text-center sm:text-right">
            LAarquitectura &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
