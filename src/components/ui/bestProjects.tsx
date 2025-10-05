import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BestProjectsData from "@/data/BestProjectsData"


export default function FeaturedProjects() {
  return (
    <div className="container mx-auto px-6 pb-32">
      <div className="grid gap-32">
        {BestProjectsData.map((project, index) => (
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

              <Link href={`/projects/${project.url}`}>
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
