import ContactForm from '@/components/ui/contactForm';
import { BusinessHours } from "@/components/ui/horarios"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import { Metadata } from "next";
import { generateSeoMetadata } from "@/data/SEO";
import { CONTACT_SEO } from "@/data/seo-constants";


export function generateMetadata(): Metadata {
    return generateSeoMetadata(CONTACT_SEO);
  }

const team = [
    {
        name: "Ing. Leonardo Pérez",
        role: "Arquitecto Principal",
        email: "leo.perez@email.com",
        phone: "+58 414 1234567",
        image: "/images/ingsaul.png",
    },
    {
        name: "Ing. Luis Guillen",
        role: "Ingeniero Civil",
        email: "guillenphenry@gmail.com",
        phone: "+58 424 5283033",
        image: "/images/ingsaul.png",
    },
    {
        name: "Saul",
        role: "Diseñadora de Interiores",
        email: "maria.gonzalez@email.com",
        phone: "+58 412 7654321",
        image: "/images/ingsaul.png",
    },
]

const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]
export default function ContactPage() {
    return (
        <>
            <section className="w-full flex flex-col bg-white white-section ">
                {/* Texto arriba */}
                <div className="flex flex-col items-start justify-center px-5 lg:px-15 mt-40 lg:mt-60">
                    <h1 className="text-[3.2rem] lg:text-[6rem] text-center lg:text-left 
                     lg:leading-30 font-bold mb-6">
                        CONSULTA Y AGENDA
                    </h1>
                    <p className="text-xl lg:text-[2rem] font-bold mb-8 text-muted-foreground">
                        Comience hoy mismo el desarrollo de su proyecto arquitectónico
                        o civil. En L Arquitectura estamos listos para escuchar sus
                        requerimientos y convertir sus ideas en planos ejecutables.
                        Contáctenos para agendar una consulta en nuestra sede o
                        envíenos su solicitud directamente a través de nuestro formulario.
                    </p>
                </div>

                {/* Imagen con gradiente abajo */}
                <div className="relative w-full h-[300px] px-5 lg:px-8 mb-12 mt-50">
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

                <section className="w-full lg:px-15 px-5 py-20 md:py-32">
                    <div className="container mx-auto">
                        {/* Header */}
                        <div className="mb-20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-16 bg-border" />
                                <span className="text-[2rem] font-light tracking-widest
                                 text-muted-foreground uppercase">Contacta con nosotros</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance">
                                Hablemos de tu proyecto
                            </h2>
                        </div>

                        {/* Team Members */}
                        <div className="grid md:grid-cols-3 gap-12 mb-32">
                            {team.map((member, index) => (
                                <div key={index} className="group">
                                    <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-light mb-2">{member.name}</h3>
                                        <p className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-6">{member.role}</p>
                                        <div className="space-y-3">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <Mail className="w-4 h-4" strokeWidth={1.5} />
                                                <span className="text-sm font-light">{member.email}</span>
                                            </a>
                                            <a
                                                href={`tel:${member.phone.replace(/\s/g, "")}`}
                                                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <Phone className="w-4 h-4" strokeWidth={1.5} />
                                                <span className="text-sm font-light">{member.phone}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Location & Social */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-15 mb-20">
                            <Card className="p-10 border-border bg-transparent">
                                <MapPin className="w-10 h-10 mb-6 text-foreground" strokeWidth={1} />
                                <h3 className="text-2xl font-light mb-4">¿Dónde estamos?</h3>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-2">
                                    Nuestra oficina principal está ubicada en:
                                </p>
                                <p className="text-xl font-light mb-1">Barquisimeto, Venezuela</p>
                                <p className="text-muted-foreground font-light">¡Visítanos para una atención personalizada!</p>
                            </Card>

                            <Card className="p-10 border-border bg-transparent">
                                <div className="flex items-center gap-3 mb-6">
                                    {socialLinks.map((social, index) => (
                                        <social.icon key={index} className="w-10 h-10 text-foreground" strokeWidth={1} />
                                    ))}
                                </div>
                                <h3 className="text-2xl font-light mb-4">Síguenos en redes sociales</h3>
                                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                                    Mantente conectado y conoce más sobre nuestros proyectos
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="icon"
                                            className="border-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                                            asChild
                                        >
                                            <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                                <social.icon className="w-5 h-5" strokeWidth={1.5} />
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Horario de atención */}
                <BusinessHours />
                {/* Formulkario de contacto */}
                <ContactForm />

            </section>
        </>
    );
}