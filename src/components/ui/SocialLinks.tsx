import { Facebook, Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`relative group mt-4 border-t border-white p-7 ${className || ""}`}>
      <div className="flex justify-center space-x-4">
        <a
          href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>

        <a
          href="mailto:your-email@example.com" // Reemplaza con tu correo electrónico
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Email"
        >
          <Mail size={30} />
        </a>

        <a
          href="https://www.instagram.com/your-instagram-username/" // Reemplaza con tu nombre de Instagram
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Instagram"
        >
          <Instagram size={30} />
        </a>

        <a
          href="https://facebook.com/your-facebook-username/" // Reemplaza con tu nombre de Facebook
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Facebook"
        >
          <Facebook size={30} />
        </a>
      </div>
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
    </div>
  );
}