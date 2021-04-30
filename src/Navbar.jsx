import React, { useState } from 'react'
import {MenuIcon ,XIcon} from '@heroicons/react/solid'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData'

//Componente Menu con accion de estado falso y verdadero para abrir o desplegar el menu 

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar);
    } 

    

    return (
        <>
            <div className='h-20 absolute w-full pt-4'>
                <div className='flex justify-between items-center'>
                <Link to='#' className=' ml-8'>
                <MenuIcon className='w-10 h-10' onClick={showSidebar} />
                </Link>
                <p>logo</p>
                <h2 className='mr-4'>Pasteleria</h2>
                </div>
            </div>
            <nav className={sidebar ? 'left-0 transition-all duration-500 flex bg-black opacity-75 h-screen w-60 justify-center fixed top-0 z-50' : 'flex bg-black h-screen w-60 justify-center fixed top-0 -left-full transition-all duration-1000'}>
                <ul className='nav-menu-items w-11/12' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='m-8'>
                        <XIcon className=' w-10 h-10 text-white'/>
                        </Link>
                        </li>
                        {SidebarData.map((item,index) => {
                            return(
                              <li key={index}> 
                              <Link className='flex w-4/5 h-full items-center p-3 rounded-lg hover:bg-blue-400' to={item.path}>
                               <p className='text-white h-10 w-10'>{item.icon}</p>
                               <span className='ml-2 text-white'>{item.title}</span>
                             </Link>
                              </li>  
                            );
                        })}
                 
                </ul>
            </nav>
        </>
    )
}

export default Navbar
