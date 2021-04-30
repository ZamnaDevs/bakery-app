import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import primera from '../assets/img/primera.jpg'
import segunda from '../assets/img/segunda.jpg'
import tercera from '../assets/img/tercera.jpg'


const Slider = () => {
    return (
       <AwesomeSlider 
       className="h-screen"
       >
         <div className='bg-white w-full flex flex-col mb-2'>
             <img className='h-auto' src={primera} alt=""/>
             <div className='flex flex-row justify-between p-4'>
              <div>
              <p>Pastel de Unicornio</p>
              <p className='mt-4'>Ingredientes</p>
              <ul className='list-disc list-inside'>
                  <li>
                      Pastel de 3 Leches
                  </li>

                  <li>
                      Pan de chocolate/vainilla
                  </li>

                  <li>
                      Crema Pastelera
                  </li>
              </ul>
              </div>
                <div>
                    <p>$200</p>
                </div>
             </div>
          <div className='w-full mb-6 flex justify-center '>
          <button className='w-1/4 p-4 rounded-3xl bg-red-600 text-white shadow-lg'>Ordenar</button> 
          </div>
         </div>
         
         
         {/* Segundo producto */}
         <div className='bg-white w-full flex flex-col'>
             <img className='h-auto' src={segunda} alt=""/>
             <div className='flex flex-row justify-between p-4'>
              <div>
              <p>Pastel de Oreo</p>
              <p className='mt-4'>Ingredientes</p>
              <ul className='list-disc list-inside'>
                  <li>
                      Pastel de 3 Leches
                  </li>

                  <li>
                      Pan de vainilla
                  </li>

                  <li>
                      Crema Pastelera
                  </li>
              </ul>
              </div>
                <div>
                    <p>$350 - $1500</p>
                </div>
             </div>
          <div className='w-full mb-6 flex justify-center '>
          <button className='w-1/4 p-4 rounded-3xl bg-red-600 text-white shadow-lg'>Ordenar</button> 
          </div>
         </div>


          {/* Tercer producto */}
          <div className='bg-white w-full flex flex-col'>
             <img className='h-auto' src={tercera} alt=""/>
             <div className='flex flex-row justify-between p-4'>
              <div>
              <p>Pastel de Oreo</p>
              <p className='mt-4'>Ingredientes</p>
              <ul className='list-disc list-inside'>
                  <li>
                      Pastel de 3 Leches
                  </li>

                  <li>
                      Pan de vainilla
                  </li>

                  <li>
                      Crema Pastelera
                  </li>
              </ul>
              </div>
                <div>
                    <p>$350 - $1500</p>
                </div>
             </div>
          <div className='w-full mb-6 flex justify-center '>
          <button className='w-1/4 p-4 rounded-3xl bg-red-600 text-white shadow-lg'>Ordenar</button> 
          </div>
         </div>
        {/* FIN Tercer producto */}
         

       </AwesomeSlider>
    )
}

export default Slider
