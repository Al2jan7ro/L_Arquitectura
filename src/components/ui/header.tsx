"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { roboto } from "../ui/fonts";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // 🎨 Detecta cuando el logo está sobre fondo blanco
  useEffect(() => {
    const logo = document.getElementById("logo-text");
    if (!logo) return;

    let ticking = false;

    const checkOverlap = () => {
      if (!logo) return;
      const logoRect = logo.getBoundingClientRect();
      const whiteSections = Array.from(
        document.querySelectorAll(".white-section")
      );
      let overWhite = false;

      for (const sec of whiteSections) {
        const rect = sec.getBoundingClientRect();
        const intersects = !(
          logoRect.right < rect.left ||
          logoRect.left > rect.right ||
          logoRect.bottom < rect.top ||
          logoRect.top > rect.bottom
        );

        if (intersects) {
          const bg = window.getComputedStyle(sec).backgroundColor;
          if (bg.includes("255")) {
            overWhite = true;
            break;
          }
        }
      }

      logo.classList.toggle("text-black", overWhite);
      logo.classList.toggle("text-white", !overWhite);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkOverlap();
          ticking = false;
        });
        ticking = true;
      }
    };

    checkOverlap();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const mo = new MutationObserver(() => onScrollOrResize());
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mo.disconnect();
    };
  }, []);

  return (
    <header className="absolute top-0 w-full z-40 flex justify-between items-center lg:px-20 px-5 py-6">
      {/* Logo */}
      <Link
        id="logo-text"
        href="/"
        className="font-bold text-2xl lg:text-3xl text-white transition-colors duration-300"
      >
        LArquitectura
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <NavigationMenu>
          <NavigationMenuList className={`flex gap-6 ${roboto.className}`}>
            {/* PROYECTOS */}
            <NavigationMenuItem>
              <HoverCard openDelay={100}>
            <Link href="/projects">
                <HoverCardTrigger asChild>
                  <NavigationMenuTrigger
                    className="bg-[#282627] text-white text-[.8rem] font-bold 
                               rounded-2xl px-4 py-2 transition duration-200 
                               hover:bg-white hover:text-black hover:scale-105"
                  >
                    PROYECTOS
                  </NavigationMenuTrigger>
                </HoverCardTrigger>
              </Link>
                <HoverCardContent className="w-60 text-md">
                  <p className="text-muted-foreground">
                    Descubre nuestros proyectos arquitectónicos destacados, con
                    un enfoque moderno y sostenible.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-2 p-0 text-[1rem] text-black "
                  >
                    <Link href="/projects">Ver proyectos</Link>
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>

            {/* SERVICIOS */}
            <NavigationMenuItem>
              <HoverCard openDelay={100}>

                <Link href="/services">
                <HoverCardTrigger asChild>
                  <NavigationMenuTrigger
                    className="bg-[#282627] text-white text-[.8rem] font-bold 
                               rounded-2xl px-4 py-2 transition duration-200 
                               hover:bg-white hover:text-black hover:scale-105"
                  >
                    SERVICIOS
                  </NavigationMenuTrigger>
                </HoverCardTrigger>
                </Link>
                <HoverCardContent className="w-60 text-md">
                  <p className="text-muted-foreground">
                    Conoce nuestros servicios de diseño, planificación y
                    ejecución adaptados a cada cliente.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-2 p-0 text-[1rem] text-black "
                  >
                    <Link href="/services">Explorar servicios</Link>
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>

            {/* CONTACTO */}
            <NavigationMenuItem>
              <HoverCard openDelay={100}>

                <Link href="/contact">
                <HoverCardTrigger asChild>
                  <NavigationMenuTrigger
                    className="bg-[#282627] text-white text-[.8rem] font-bold 
                               rounded-2xl px-4 py-2 transition duration-200 
                               hover:bg-white hover:text-black hover:scale-105"
                  >
                    CONTACTO
                  </NavigationMenuTrigger>
                </HoverCardTrigger>
                </Link>
                <HoverCardContent className="w-60 text-md">
                  <p className="text-muted-foreground">
                    Ponte en contacto con nosotros para iniciar tu proyecto o
                    solicitar una cotización.
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-2 p-0 text-[1rem] text-black "
                  >
                    <Link href="/contact">Contáctanos</Link>
                  </Button>
                </HoverCardContent>
              </HoverCard>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Button */}
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        size="sm"
        className="lg:hidden bg-white hover:bg-white text-black hover:text-black border-none rounded-2xl"
      >
        <Menu size={20} />
      </Button>

      {/* Backdrop */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
        />
      )}

      {/* Drawer Mobile */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full bg-white text-black lg:hidden z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="bg-white text-black rounded-xl px-3 py-1 text-sm hover:opacity-90 transition"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="h-[calc(100vh-56px)] flex items-center justify-center">
          <ul className="flex flex-col items-center gap-6 text-[2rem] font-semibold">
            <li>
              <Link href="/projects" onClick={() => setOpen(false)}>
                PROYECTOS
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setOpen(false)}>
                SERVICIOS
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setOpen(false)}>
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}
