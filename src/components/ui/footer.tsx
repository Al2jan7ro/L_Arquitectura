import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Left section with logo and CTA */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <Image src="/images/logoB.png" alt="Logo" width={140} height={70} className="object-contain" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              SOMOS TU SOLUCIÓN
              <br />
              CONFIABLE
            </h2>

            <p className="text-base text-white mb-6 max-w-md leading-relaxed font-['Roboto']">
              Contáctanos para más información, cotizaciones y consultas acerca de nuestros servicios
            </p>

            <Link
              href="/contact"
              className="bg-white text-black font-semibold px-8 py-3 font-['Roboto'] rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20"
            >
              Contacto
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
                href="#"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-md text-gray-300 font-bold">Desarrollado por Al2jan7ro. © 2025 Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
