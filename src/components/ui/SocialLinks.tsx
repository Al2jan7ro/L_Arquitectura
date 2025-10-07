import { Facebook, Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`relative group mt-4 border-t border-white p-7 ${className || ""}`}>
      <div className="flex justify-center space-x-4 text-white">
        <a
          href="https://wa.me/584267779108?text=¡Hola!%20Me%20gustaría%20explorar%20cómo%20LArquitectura%20puede%20ayudarme%20con%20mi%20próximo%20proyecto.%20¿Podemos%20conversar?"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=leo.henry.asociados@gmail.com&su=Consulta%20de%20Proyecto:%20¡Transformemos%20tu%20visión%20con%20LArquitectura!&body=Hola%20equipo%20de%20LArquitectura,%0A%0AMe%20interesa%20conocer%20más%20sobre%20sus%20servicios%20para%20un%20proyecto%20que%20tengo%20en%20mente.%20¿Podrían%20proporcionarme%20más%20detalles%20o%20indicarme%20los%20próximos%20pasos?%0A%0AGracias."
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Email"
        >
          <Mail size={30} />
        </a>

        <a
          href="https://www.instagram.com/leo.luis.arquitectura/?hl=es-la" // Reemplaza con tu nombre de Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Instagram"
        >
          <Instagram size={30} />
        </a>

  
      </div>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
    </div>
  );
}