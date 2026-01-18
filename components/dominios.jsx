'use client'
import { event } from '@/lib/fbPixel'
import React from 'react'


const Dominios = () => {

     const handleWhatsAppClick = () => {
        if (typeof window === "undefined") return;

        const isMobile =
            navigator.userAgentData?.mobile ||
            window.innerWidth < 768;

        if (isMobile && typeof window.fbq === "function") {
            // Evento principal para campañas de WhatsApp
            window.fbq("track", "Contact");

            // Opcional: si quieres que WhatsApp cuente también como Lead
            window.fbq("track", "Lead");
        }
    };


    return (
        <div className="relative flex flex-col justify-center items-center p-6">
            {/* Pseudo-elemento para la imagen de fondo */}
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/background/fondo.jpg')] opacity-50"></div>
            <div className='flex flex-col justify-center items-center z-10 gap-6'>
                <h1 className='text-[40px] md:text-[90px] font-extrabold text-red-600 text-center underline uppercase'>DOMINIOS Y <br /> ATRACCIÓN SEXUAL</h1>
                <p className='text-white justify-center text-center font-bold text-[18px] md:text-[35px] max-w-[1000px]'>
                    Atrae y domina a esa persona que se ha distanciado o que ​por su necedad quiere poner una barrera o un bloqueo entre ​ustedes y garantiza la pasion y el deseo
                </p>
                <a
                    id='whatsappButton'
                    href="https://wa.me/527224609514"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="flex flex-col justify-center items-center pl-7 relative w-[280px] md:w-[430px] h-[60px] md:h-[80px] bg-[#00a81c] rounded-lg my-8 cursor-pointer transition-transform hover:scale-105"
                >
                    <span className='text-white uppercase text-md md:text-2xl font-extrabold'>HABLEMOS POR WHATSAPP</span>
                    {/* <span className='text-white uppercase text-md md:text-2xl font-extrabold'>Y consulta por whatsapp</span> */}
                    <div className='absolute -left-12 md:-left-14 h-[60px] w-[60px] md:h-[100px] md:w-[100px] rounded-full bg-[#00a81c]'></div>
                    <img src="icons/whatsapp.svg" alt="" className='absolute -left-10 md:-left-12 top-0 w-14 h-14 md:w-20 md:h-20' />
                </a>
                <img src={"/images/dominios.jpg"} alt="retornos img" className='w-[750px]' />
            </div>

        </div>
    )
}


export default Dominios
