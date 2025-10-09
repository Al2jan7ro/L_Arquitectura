"use client";
import {roboto} from "@/components/ui/fonts"

import { useState, useRef, type FormEvent } from 'react';

export default function ContactForm() {
  const [alert, setAlert] = useState({ message: '', type: '' });
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setAlert({
          message: '¡Gracias por contactarnos! Tu mensaje ha sido enviado.',
          type: 'success',
        });
        form.reset();
      } else {
        const result = await response.json();
        setAlert({
          message: result.errors ? result.errors.map((err: any) => err.message).join(', ') : 'Ocurrió un error inesperado.',
          type: 'error',
        });
      }
    } catch (error) {
      setAlert({
        message: 'No se pudo enviar el formulario. Por favor, inténtalo de nuevo más tarde.',
        type: 'error',
      });
    }
  };

  const alertClass = alert.type === 'success'
    ? 'bg-green-500'
    : alert.type === 'error'
      ? 'bg-red-500'
      : 'hidden';

  return (
<>
    <div className='flex flex-col items-center justify-center px-5'>
        <h1 className='text-[2.2rem] lg:text-[3rem] text-center items-center justify-center
        flex font-bold text-balance'>DÉJANOS SABER <br></br>CÓMO PODEMOS AYUDARTE</h1>

    </div>
    

    <div id="contact-form" className="flex items-center justify-center min-h-screen px-0 ">
      <div className="p-8 w-full max-w-3xl">
        {/* Alerta */}
        <div id="form-alert" className={`mb-4 p-4 rounded-lg text-white font-semibold flex justify-between items-center ${alertClass}`}>
          <span id="alert-message">{alert.message}</span>
          <button onClick={() => setAlert({ message: '', type: '' })} className="ml-4 text-white hover:text-gray-200">
            &times;
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} 
          action="https://formspree.io/f/mdkwlqbg" 
          method="POST"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Nombre</label>
            <input type="text" id="name" name="name"
              className="w-full px-6 py-4 border border-gray-300 bg-black/20  focus:outline-none hover:border-black focus:border-black focus:ring-2 focus:ring-black"
              placeholder="Tu nombre completo" required />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email"
              className="w-full px-6 py-4 border border-gray-300 bg-black/20  focus:outline-none hover:border-black focus:border-black focus:ring-2 focus:ring-black"
              placeholder="tu.email@ejemplo.com" required />
          </div>

          {/* Asunto */}
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">Asunto</label>
            <input type="text" id="subject" name="subject"
              className="w-full px-6 py-4 border border-gray-300 bg-black/20  focus:outline-none hover:border-black focus:border-black focus:ring-2 focus:ring-black"
              placeholder="Escribe el asunto" required />
          </div>

          {/* Descripción */}
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-gray-700 text-sm font-semibold mb-2">Descripción</label>
            <textarea id="description" name="description" rows={4}
              className="w-full px-4 py-2 border border-gray-300 bg-black/20 resize-none focus:outline-none hover:border-black focus:border-black focus:ring-2 focus:ring-black"
              placeholder="Cuéntame en qué puedo ayudarte." required></textarea>
          </div>

          {/* reCAPTCHA invisible */}
          <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />

          {/* Botón */}
          <div className="md:col-span-2 flex justify-center">
            <button id="contact-btn" type="submit"
              className={`w-full md:w-auto bg-black text-white font-bold py-2 px-8 rounded-lg cursor-pointer
               hover:bg-gray-500 focus:outline-none focus:ring-2 hover:border-black focus:ring-black
                focus:ring-offset-2 transition-transform hover:scale-110 duration-500 ${roboto.className}`}>
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}