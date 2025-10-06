import BestProjects from "./ui/bestProjects";
import BentoGrid from "./ui/bentoGrid";

export default function ProjectsSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="container mx-auto px-6 py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light 
        tracking-tight text-foreground text-balance">
          Conoce nuestros proyectos
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground 
        max-w-2xl font-light leading-relaxed">
          Exploramos la intersección entre arquitectura contemporánea y 
          diseño sostenible, creando espacios que
          transforman la experiencia humana.
        </p>
      </div>
       
        {/* Best Projects */}
        <BestProjects />
        {/* Bento Grid */}
        <BentoGrid />
      
    </section>
  )
}
