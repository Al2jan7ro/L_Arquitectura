"use client"
import Image from "next/image"
import { useState } from "react"
import projects from "@/data/HausesData"

export default function BentoGrid() {
    const [hoveredId, setHoveredId] = useState<number | null>(null)

    return (
        <div className="container mx-auto px-6 py-20">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground text-balance">
                    Proyectos que Definen Espacios
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                    Desde centros comerciales y médicos hasta residencias exclusivas, cada diseño es una muestra de nuestra versatilidad y compromiso con la arquitectura que transforma la experiencia humana.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] mt-20">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`group relative overflow-hidden bg-muted ${project.span} transition-all duration-500 ease-out`}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            transform: hoveredId === project.id ? "scale(1.02)" : "scale(1)",
                            zIndex: hoveredId === project.id ? 10 : 1,
                            cursor: "default"
                        }}
                    >
                        {/* Imagen */}
                        <div className="absolute inset-0">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/40 transition-opacity duration-500"
                            style={{
                                opacity: hoveredId === project.id ? 1 : 0.5,
                            }}
                        >
                            <div className="absolute bottom-8 left-8 text-white">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="text-sm font-medium mb-2">{project.category}</p>
                                <p
                                    className="text-md transition-all duration-500"
                                    style={{
                                        maxHeight: hoveredId === project.id ? "100px" : "0",
                                        opacity: hoveredId === project.id ? 1 : 0,
                                        overflow: "hidden",
                                    }}
                                >{project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
