import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Exploramos nuevas formas de diseñar espacios que transforman la experiencia humana",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada detalle cuenta en la materialización de tus sueños arquitectónicos",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Comprometidos con los más altos estándares de calidad en cada proyecto",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos contigo en cada fase para asegurar que tu visión se haga realidad",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen px-5 lg:px-15 py-20 md:py-32 flex items-center justify-center mt-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-border" />
                <span className="text-[2rem] font-light tracking-widest text-muted-foreground uppercase">
                  Sobre nosotros
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8 text-balance leading-tight">
                Transformamos tus sueños en realidad arquitectónica
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10">
                L Arquitectura está dedicado a plasmar tus proyectos arquitectónicos, sean pequeños o grandes, a través
                de todas sus fases de creación. Nos esforzamos en todo el desarrollo hasta lograr que la obra se asemeje
                a tus sueños.
              </p>

              <Link href="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-foreground text-foreground text-lg cursor-pointer
                  hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                >
                  Explora nuestros proyectos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-sm h-[500px] lg:h-[600px]">
              <Image
                src="/images/abt-arq.jpg"
                alt="Equipo de LArquitectura trabajando en proyecto"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full px-5 lg:px-15 py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-light text-muted-foreground/30">Conoce</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-balance">Quiénes somos</h2>

              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Fundado por el arquitecto Leo y el ingeniero Luis, nuestro estudio está especializado en servicios
                profesionales de diseño y construcción de proyectos arquitectónicos, donde podrás encontrar la solución
                confiable que se ajuste a tu requerimiento.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-2">
                    Experiencia
                  </h3>
                  <p className="text-2xl font-light">+20 años transformando espacios</p>
                </div>
                <div>
                  <h3 className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-2">Proyectos</h3>
                  <p className="text-2xl font-light">+50 proyectos completados</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm h-[600px] lg:h-[700px]">
              <video src="/assets/video.mp4" className="w-full h-full object-cover" autoPlay loop muted playsInline />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-5 lg:px-15 py-20 md:py-32">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-6xl font-light text-muted-foreground/30">Cuales son</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-balance">Nuestros valores</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 border-border hover:border-foreground/20 transition-all duration-300 bg-transparent"
              >
                <value.icon className="w-10 h-10 mb-6 text-foreground" strokeWidth={1} />
                <h3 className="text-xl font-light mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
