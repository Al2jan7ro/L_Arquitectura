"use client";

import { useState } from "react";

export default function header(){
    const [open, setOpen] = useState(false);

    return (
        <header className="header absolute w-full z-40
        flex flex-row px-8 py-6 justify-between text-white items-center">
            <div>
                <h1 className="font-bold text-2xl lg:text-3xl">LArquitectura</h1>
            </div>

            {/* Desktop menu */}
            <div className="menu hidden lg:flex flex-row">
                <nav>
                    <ul className="flex flex-row gap-5">
                        <li><a href="#" className="inline-block bg-[#282627] text-[.7rem] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white hover:text-black hover:scale-105">PROYECTOS</a></li>
                        <li><a href="#" className="inline-block bg-[#282627] text-[.7rem] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white hover:text-black hover:scale-105">SERVICIOS</a></li>
                        <li><a href="#" className="inline-block bg-[#282627] text-[.7rem] font-bold
                         rounded-2xl px-4 py-2 transition duration-200 hover:bg-white hover:text-black hover:scale-105">CONTACTO</a></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile hamburger */}
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
                className={`fixed top-0 right-0 h-screen w-full bg-[#282627] text-white lg:hidden z-50 transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
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
                        <li><a href="#"  onClick={() => setOpen(false)}>PROYECTOS</a></li>
                        <li><a href="#"  onClick={() => setOpen(false)}>SERVICIOS</a></li>
                        <li><a href="#"  onClick={() => setOpen(false)}>CONTACTO</a></li>
                    </ul>
                </nav>
            </aside>
            
        </header>
    );
}