import React from 'react'
import {HomeIcon,ShoppingCartIcon,HeartIcon,ChatIcon} from '@heroicons/react/solid' 
//Componente con los arrays de los titulos del menu con los iconos

export const SidebarData = [
 {
     title: 'Inicio',
     path: '/',
     icon: <HomeIcon />
 },

 {
    title: 'Tienda',
    path: '/tienda',
    icon: <ShoppingCartIcon />,
},

{
    title: 'Carrito',
    path: '/carrito',
    icon: <HeartIcon />
},

{
    title: 'Contacto',
    path: '/contacto',
    icon: <ChatIcon />
},
]
