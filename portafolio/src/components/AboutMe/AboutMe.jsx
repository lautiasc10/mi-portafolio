import React from 'react';
import imagenPerfil from '../../image/imagen-portafolio.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const AboutMe = () => {
  return (
    <section className='text-white py-48' id='inicio'>
      <header className='flex justify-center gap-x-4 '>
        <div>
          <h1 className='text-4xl font-bold mb-6'>
            Lautaro Gonzalez
          </h1>
          <p className='text-white text-lg font-medium  '>Estudiante avanzado de la Tecnicatura en Programación en UTN Rosario.
            Me especializo en desarrollo web tanto Front-End como Back-End.
            Me apasiona seguir aprendiendo, enfrentar nuevos desafíos y participar en proyectos que me permitan crecer profesionalmente.
            Estoy abierto a nuevas oportunidades donde pueda aportar mis habilidades y continuar desarrollándome en el mundo IT.</p>
          <div className='flex gap-x-4 py-4'>
            <a 
            className='flex items-center gap-2 border border-gray-400 rounded-2xl px-4 py-1 font-bold bg-[#6d1010b4] hover:bg-red-950' 
            href="https://github.com/lautiasc10" target="_blank" rel="noopener noreferrer">
              <FaGithub size={16} />
              GitHub
            </a>
            <a 
            className='flex items-center gap-2 border border-gray-400 rounded-2xl px-4 py-1 font-bold bg-[#6d1010b4] hover:bg-red-950' 
            href="https://www.linkedin.com/in/lautaro-gonzalez-a094ba288/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={16} />
              Linkedin
            </a>
          </div>
        </div>
        <img src={imagenPerfil} alt="" className='w-56 rounded-full' />
      </header>

    </section>
  );
};

export default AboutMe;
