import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    title: "FuriaFit Gym",
    description:
      "Una exploración arquitectónica que fusiona la luz natural con espacios minimalistas. Este proyecto residencial redefine el concepto de hogar contemporáneo mediante el uso de materiales nobles y una paleta cromática neutra que dialoga con el entorno.",
    image: "./projects/furiafit/furiafit.jpg",
    year: "2024",
    location: "Barcelona, España",
    area: "450 m²",
  },
  {
    id: 2,
    title: "Centro Cultural Axis",
    description:
      "Un espacio público que celebra la cultura y la comunidad. La geometría audaz y los volúmenes escultóricos crean un hito urbano que invita a la exploración y el descubrimiento, integrando arte, arquitectura y paisaje en una experiencia cohesiva.",
    image: "./projects/furiafit/furiafit.jpg",
    year: "2023",
    location: "Madrid, España",
    area: "2,800 m²",
  },
  {
    id: 3,
    title: "Torre Meridian",
    description:
      "Un rascacielos que redefine el skyline urbano con su diseño vertical innovador. La fachada dinámica responde al clima y la luz, mientras que los espacios interiores priorizan el bienestar y la sostenibilidad, estableciendo nuevos estándares para la arquitectura corporativa.",
    image: "./projects/furiafit/furiafit.jpg",
    year: "2024",
    location: "Valencia, España",
    area: "18,500 m²",
  },
]

export default function FeaturedProjects() {
  return (
    <div className="container mx-auto px-6 pb-32">
      <div className="grid gap-32">
        {featuredProjects.map((project, index) => (
          <article key={project.id} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className={`relative aspect-[4/3] overflow-hidden bg-muted ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                <span className="text-sm font-light tracking-wider">{project.year}</span>
              </div>
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-light text-muted-foreground/30">0{project.id}</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">{project.title}</h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10 text-sm">
                <div>
                  <span className="block text-muted-foreground mb-1 font-light">Ubicación</span>
                  <span className="font-normal">{project.location}</span>
                </div>
                <div>
                  <span className="block text-muted-foreground mb-1 font-light">Área</span>
                  <span className="font-normal">{project.area}</span>
                </div>
              </div>

              <Link href={`/proyectos/${project.id}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                >
                  Ver proyecto completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
