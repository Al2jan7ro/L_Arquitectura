"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { roboto } from "../ui/fonts";

export default function header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("logo-text");
    if (!logo) return;

    let ticking = false;

    const checkOverlap = () => {
      if (!logo) return;
      const logoRect = logo.getBoundingClientRect();
      const whiteSections = Array.from(document.querySelectorAll(".white-section"));
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
          // comprobar que la sección tenga fondo blanco (bg-white => rgb(255, 255, 255))
          const bg = window.getComputedStyle(sec).backgroundColor;
          if (
            bg === "rgb(255, 255, 255)" ||
            bg === "rgba(255, 255, 255, 1)" ||
            bg === "#ffffff" ||
            bg === "#fff"
          ) {
            overWhite = true;
            break;
          }
        }
      }

      if (overWhite) {
        logo.classList.add("text-black");
        logo.classList.remove("text-white");
      } else {
        logo.classList.add("text-white");
        logo.classList.remove("text-black");
      }
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

    // Chequeo inicial y listeners
    checkOverlap();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // Si el DOM cambia (images cargan, contenido dinámico), re-evaluar
    const mo = new MutationObserver(() => onScrollOrResize());
    mo.observe(document.body, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mo.disconnect();
    };
  }, []);

  return (
    <header className="header absolute w-full z-40 flex flex-row px-8 py-6 justify-between text-white items-center">
      <div>
        {/* Logo: por defecto blanco. El script modifica SOLO este elemento */}
        <Link
          id="logo-text"
          href="/"
          className="font-bold text-2xl lg:text-3xl text-white transition-colors duration-300"
        >
          LArquitectura
        </Link>
      </div>

      {/* Desktop menu (sin cambios en estilos) */}
      <div className="menu hidden lg:flex flex-row">
        <nav>
          <ul className={`flex flex-row gap-5 ${roboto.className}`}>
            <li>
              <Link
                href="/projects"
                className="inline-block bg-[#282627] text-[.8rem] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white 
                          hover:text-black hover:scale-105"
              >
                PROYECTOS
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="inline-block bg-[#282627] text-[.8em] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white
                          hover:text-black hover:scale-105"
              >
                SERVICIOS
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="inline-block bg-[#282627] text-[.8rem] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white
                          hover:text-black hover:scale-105"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile hamburger (sin cambios) */}
      <button
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="lg:hidden bg-[#282627] rounded-2xl px-3 py-2 text-sm font-bold hover:bg-white hover:text-black transition"
      >
        ☰
      </button>

      {/* Backdrop */}
      {open && (
        <button
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[1px] lg:hidden z-40"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full bg-[#282627] text-white lg:hidden z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-5 py-4 ">
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="bg-white text-black rounded-xl px-3 py-1 text-sm hover:opacity-90 transition"
          >
            X
          </button>
        </div>
        <nav className="h-[calc(100vh-56px)] flex items-center justify-center">
          <ul className="flex flex-col items-center gap-6 text-[2rem]">
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
