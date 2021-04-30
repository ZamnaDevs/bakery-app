import React from 'react';
import Portada from '../assets/img/portada.jpg'
import Slider from '../components/Slider';
import videoPortada from '../assets/video/video.mp4'
import ventaja1 from '../assets/img/ventaja1.jpg'
import ventaja2 from '../assets/img/ventaja2.png'
import ventaja3 from '../assets/img/ventaja3.jpg'
import Formulario from '../components/Formulario';

const Inicio = () => {
    return (
        <div className='grid grid-cols-12'>
          <div className='h-screen col-span-12 mb-2'>
          <div className='col-span-12'>
                <img className='h-{600px} shadow-lg' src={Portada} alt='pastel'></img>
            </div>
            <div className='col-span-12 text-center my-5'>
                <h2 className='text-5xl'>Pasteleria y Reposteria</h2>
            </div>
            <div className='col-span-12 mb-3'>
                <div className='flex justify-center w-full'>
                    <button className=' w-1/4 p-4 rounded-3xl bg-red-600 text-white shadow-lg'>Comprar</button>
                </div>
            </div>
          </div>

            <section className='col-span-12 h-screen p-2 mb-16'>
                <h2 className='text-center text-5xl my-3'>Catalogo</h2>
                <Slider />
            </section>

            <section className='col-span-12 mt-20'>
                <h2 className='text-2xl text-center'>Las ventajas</h2>
                <div className='flex flex-col my-4 p-2'>
                    <div className='flex flex-row w-full mb-2'>
                        <div className='w-1/3'>
                            <img className='rounded-full' src={ventaja1}></img>
                        </div>
                        <div className='w-9/12 p-6'>Pasteles con ingredientes de alta calidad</div>
                    </div>
                    <div className='flex flex-row w-full mb-2'>
                        <div className='w-1/3'>
                            <img className='rounded-full' src={ventaja2}></img>
                        </div>
                        <div className='w-9/12 p-6'>Perfectos para toda ocasion y para cada momento</div>
                    </div>
                    <div className='flex flex-row w-full'>
                        <div className='w-1/3'>
                        <img className='rounded-full' src={ventaja3}></img>
                        </div>
                        <div className='w-9/12 p-6'>Los pedidos con facilidad y rapidez de entrega</div>
                    </div>
                </div>
            </section>

            <section className='col-span-12 flex'>
                <video className='my-2' autoPlay muted loop src={videoPortada}></video>
            </section>

            <section className='col-span-12 h-screen'>
                <Formulario />
            </section>


        </div>
    )
}

export default Inicio