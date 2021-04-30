import React from 'react'
import {SiFacebook} from 'react-icons/si'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoWhatsapp} from 'react-icons/io'

const Formulario = () => {
    return (
        <div className='flex flex-col items-center p-2 h-full'>
            <div className='w-full'>
            <h2 className='text-center text-5xl my-16'>Como ordenar?</h2>
            <p className='mb-7'>Por favor deja tu inofrmacion de contacto y en menos de 20 minutos te responderemos</p>
            
            </div>

            <form className='flex flex-col justify-center w-full items-center'>

                <input type="text" name="" id="" placeholder="Ingresa tu Nombre" className='my-4 bg-gray-200 placeholder-black p-3 rounded-3xl w-full'/>
                <input type="number" name="" id="" placeholder="Ingresa tu Numero" className='mb-6 bg-gray-200 placeholder-black p-3 rounded-3xl w-full'/>

                <button className=' w-1/4 p-4 rounded-3xl bg-red-600 text-white shadow-lg'>Enviar</button>
            </form>


         <div className='w-full mt-7'>
             <p>O contactanos al +525538496079</p>
         </div>
        
        <div className='flex flex-col w-full h-full p-6'>
            <h2 className='text-3xl text-center mt-20'>
                Pasteleria
            </h2>
            <div className='flex flex-wrap justify-center w-full content-center h-full'>
            <SiFacebook className='text-4xl mr-6' />
            <FiInstagram className='text-4xl mr-6'/>
            <IoLogoWhatsapp className='text-4xl'/>
            </div>
        </div>
        </div>
    )
}

export default Formulario
