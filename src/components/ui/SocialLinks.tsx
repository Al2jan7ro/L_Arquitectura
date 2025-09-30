import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail,  } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";


export default function SocialLinks() {


    return (
        <div className="flex space-x-4 mt-4">
            <a
                href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-700 
                transition-colors duration-300 hover:scale-105"
            >
                <IoLogoWhatsapp size={30} />
            </a>
            <a
                href="mailto:your-email@example.com" // Reemplaza con tu correo electrónico
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-700 
                transition-colors duration-300 hover:scale-105"
            >

                <SiGmail size={30} />
            </a>

            <a 
                href="https://www.instagram.com/your-instagram-username/" // Reemplaza con tu nombre de Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-red-700 
                transition-colors duration-300 hover:scale-105"
            >
                <RiInstagramFill size={30} />
            </a>
        </div>


    )
}