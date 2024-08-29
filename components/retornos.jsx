import React from 'react'

const Retornos = () => {
    return (
        <div className="relative flex flex-col justify-center items-center p-6">
            {/* Pseudo-elemento para la imagen de fondo */}
            <div className="absolute inset-0 bg-cover bg-center bg-[url('/background/fondo.jpg')] opacity-50"></div>
            <div className='flex flex-col justify-center items-center z-10 gap-6'>
                <h1 className='text-[90px] font-extrabold text-red-600 underline uppercase'>RETORNOS DE PAREJA</h1>
                <img src={"/images/retornos2.jpeg"} alt="retornos img" className='w-[750px]' />
                <p className='text-white justify-center text-center font-bold text-[35px] max-w-[800px]'>
                    Regreso del ser amado y unión de por vida en tiempo record!
                </p>
            </div>
            <button className='flex flex-col justify-center items-center pl-7 relative w-[430px] h-[80px] bg-[#00a81c] rounded-lg my-8 cursor-pointer transition-all hover:scale-105'>
                <span className='text-white uppercase text-[26px] font-extrabold'>HÁBLEMOS POR WHATSAPP</span>
                <div className='absolute -left-14 h-[100px] w-[100px] rounded-full bg-[#00a81c]'></div>
                <img src="icons/whatsapp.svg" alt="" className='absolute -left-12 top-0 w-20 h-20' />
            </button>
        </div>
    )
}

export default Retornos