import React from 'react'

const Main = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-6">
            {/* Pseudo-elemento para la imagen de fondo */}
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/background/fondo.jpg')] opacity-50"></div>

            {/* Contenido del componente */}
            <div className="relative z-10 flex flex-col justify-center items-center">
                <h1 className='text-[90px] font-extrabold uppercase text-center text-red-600'>
                    ¡Hay solución para ti! <br /> Trabajos de amor
                </h1>
                <h2 className='text-[50px] text-white font-bold'>
                    Resultados Garantizados en 48 horas
                </h2>
                <div className='flex flex-col justify-center items-center pl-7 relative w-[430px] h-[80px] bg-[#00a81c] rounded-lg my-8 cursor-pointer transition-all hover:scale-105'>
                    <span className='text-white uppercase text-2xl font-extrabold'>Haz click aquí ahora</span>
                    <span className='text-white uppercase text-2xl font-extrabold'>Y consulta por whatsapp</span>
                    <div className='absolute -left-14 h-[100px] w-[100px] rounded-full bg-[#00a81c]'></div>
                    <img src="icons/whatsapp.svg" alt="" className='absolute -left-12 top-0 w-20 h-20' />
                </div>
                <p className='text-white justify-center text-center font-bold text-[35px] max-w-[800px]'>
                    Con más de 20 años de experiencia en trabajos y casos de ​amor, yo te ayudo donde otros han fallado y regreso a tu ​vida al ser amado. No esperes a perder para actuar, ​gracias a la FÉ y la CONFIANZA de muchas personas que ​hoy en día me lo agradecen. Yo puedo decirte que no estas ​solo y puedo ayudarte
                </p>
            </div>
        </div>
    )
}


export default Main