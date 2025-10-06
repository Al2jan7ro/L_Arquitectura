import Link from "next/link"
import { ArrowLeft, Instagram, Facebook, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import projectsData from "@/data/projectsData"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // 👈 Esperamos la promesa
  const projectId = decodeURIComponent(id);
  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Proyecto no encontrado</h1>
          <Link href="/">
            <Button variant="outline">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background mt-20">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-light font-['roboto]">Volver a proyectos</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-12">
          <div>
            <span className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 text-balance">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">{project.subtitle}</p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-sm font-['roboto']">
            <div>
              <span className="block text-muted-foreground mb-2 font-light">Año</span>
              <span className="font-normal">{project.year}</span>
            </div>
            <div>
              <span className="block text-muted-foreground mb-2 font-light">Ubicación</span>
              <span className="font-normal">{project.location}</span>
            </div>
            <div>
              <span className="block text-muted-foreground mb-2 font-light">Área</span>
              <span className="font-normal">{project.area}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            {(projectId === "FuriaFit" || projectId === "Banyan") ? (
              <video
                src={project.heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={project.heroImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
      </section>

      {/* Concept Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">El Concepto</h2>
            <p className="text-lg text-muted-foreground font-light">{project.concept.title}</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed mb-8 font-light">{project.concept.description}</p>
            <div className="bg-muted/30 p-8 border-l-2 border-foreground">
              <span className="text-sm font-light tracking-widest text-muted-foreground uppercase mb-2 block">
                Resultados
              </span>
              <p className="text-base font-light leading-relaxed">{project.concept.results}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={project.images[0] || "/placeholder.svg"}
              alt="Desafío del proyecto"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">{project.challenge.title}</h2>
            <p className="text-lg leading-relaxed font-light text-muted-foreground">{project.challenge.description}</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">El Impacto</h2>
            <p className="text-lg text-muted-foreground font-light">{project.impact.title}</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl leading-relaxed font-light">{project.impact.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 font-['roboto']">
          {project.impact.stats.map((stat: any, index: number) => (
            <div key={index} className="border-t-2 border-foreground pt-6">
              <div className="text-5xl md:text-6xl font-light mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-light tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {project.images.slice(1).map((image: string, index: number) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} - imagen ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Client Section */}
      <section className="container mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 text-center">
            Conoce a {project.client.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={project.client.image || "/placeholder.svg"}
                alt={project.client.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed font-light text-muted-foreground mb-8">
                {project.client.description}
              </p>

              <div className="space-y-4">
                <a
                  href={project.client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <Globe className="h-5 w-5" />
                  <span className="font-light group-hover:underline font-['roboto]">Visitar sitio web</span>
                </a>
                <a
                  href={project.client.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="font-light group-hover:underline font-['roboto]">Seguir en Instagram</span>
                </a>
                <a
                  href={project.client.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="font-light group-hover:underline font-['roboto]">Seguir en Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 transition-all font-['roboto'] duration-300"
              asChild
            >
              <a href={project.client.website} target="_blank" rel="noopener noreferrer">
                Visitar {project.client.name}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32 border-t border-border">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-muted-foreground font-light mb-10">
            Transformemos tu visión en realidad arquitectónica
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="font-['roboto'] border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
            >
              Contacta con nosotros
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
