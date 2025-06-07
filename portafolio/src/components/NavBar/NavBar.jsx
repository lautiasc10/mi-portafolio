import React, { use } from 'react'
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


const NavBar = () => {
    
  return (
    <header className='text-white'>
        <nav
  className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-10 py-6 rounded-full shadow-lg z-10 text-white font-bold"
  style={{
    backgroundColor: '#0d0d0d',
    backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMTUiLz48L3N2Zz4=")',
    backgroundRepeat: 'repeat',
    backgroundSize: '8px 8px', 
  }}
>
<ul className='flex justify-around'>
        <li>
            <a href="#inicio" className="cursor-pointer px-4 py-2 hover:rounded-md hover:bg-[#00ffff]/10 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">Inicio</a>
        </li>
        <li>
            <a href="#proyectos" className="cursor-pointer px-4 py-2 hover:rounded-md hover:bg-[#00ffff]/10 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">Proyectos</a>
        </li>
        <li>
            <a href="#certificados" className="cursor-pointer px-4 py-2 hover:rounded-md hover:bg-[#00ffff]/10 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300">Certificados</a>
        </li>
    </ul>
</nav>


    </header>
  )
}

export default NavBar