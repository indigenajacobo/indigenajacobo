import React from 'react'

const Testimonios = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-6 pb-[400px]">
            {/* Pseudo-elemento para la imagen de fondo */}
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/background/fondo.jpg')] opacity-50"></div>
            <div className='flex flex-col justify-center items-center z-10 gap-6'>
                <h1 className='text-[90px] font-extrabold text-red-600 underline uppercase'>TESTIMONIOS</h1>
                <img src={"/images/testimonios.jpg"} alt="retornos img" className='w-[950px]' />
                <p className='text-white justify-center text-center font-bold text-[90px]'>
                    ¡No pierdas más tiempo!
                </p>
                <p className='text-white justify-center text-center font-bold text-[90px]'>
                    ¡Aún hay solución!
                </p>
            </div>
        </div>
    )
}

export default Testimonios