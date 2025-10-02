"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

const sliderProjects = [
  {
    id: 4,
    title: "Villa Serenity",
    image: "/luxury-modern-villa-with-pool-and-landscape.jpg",
  },
  {
    id: 5,
    title: "Edificio Quantum",
    image: "/modern-glass-office.png",
  },
  {
    id: 6,
    title: "Casa Bosque",
    image: "/contemporary-house-in-forest-with-wood-and-glass.jpg",
  },
  {
    id: 7,
    title: "Museo Contemporáneo",
    image: "/contemporary-museum-architecture-with-white-concre.jpg",
  },
  {
    id: 8,
    title: "Complejo Residencial Aria",
    image: "/modern-residential-complex-with-terraces.jpg",
  },
]

export default function ProjectSlider() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const isInside =
          e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom

        setIsHovering(isInside)
        setCursorPosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return
    e.preventDefault()
    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleClick = (e: React.MouseEvent) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const scrollAmount = 600

    if (clickX < rect.width / 2) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div ref={containerRef} className="relative w-full bg-background py-20">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">Más proyectos</h2>
      </div>

      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="relative w-full overflow-x-auto overflow-y-hidden cursor-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-6 px-6 md:px-12">
          {sliderProjects.map((project) => (
            <div key={project.id} className="relative flex-shrink-0 w-[85vw] md:w-[70vw] h-[70vh] md:h-[85vh] group">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover select-none"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-20 h-20 bg-black/80 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-white text-[11px] font-medium tracking-wider uppercase transition-transform duration-200 ${
          isHovering ? "scale-100" : "scale-0"
        }`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
        }}
      >
        CLICK
      </div>
    </div>
  )
}
