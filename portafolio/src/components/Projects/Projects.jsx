import React from 'react';
import mihogar from '../../image/project-mihogar.png';
import { FaReact, FaCss3, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaGlobe  } from "react-icons/fa";

const Projects = () => {
    const myProjects = [
        {
            name: "Mi Hogar",
            description: "Sitio web de adopción de animales con soporte para distintos roles de usuario (usuario, administrador y superadministrador).",
            img: mihogar,
            languages: [
                <FaCss3 key="css" title="CSS3" className="text-blue-500" size={22} />,
                <IoLogoJavascript key="js" title="JavaScript" className="text-yellow-400" size={22} />,
                <FaReact key="react" title="React" className="text-sky-400" size={22} />,
                <RiTailwindCssFill key="tailwind" title="Tailwind CSS" className="text-cyan-400" size={22} />,
                <FaNodeJs key="node" title="Node.js" className="text-green-500" size={22} />,
                <BiLogoPostgresql key="postgres" title="PostgreSQL" className="text-indigo-600" size={22} />,
                <FaDocker key="docker" title="Docker" className="text-blue-400" size={22} />
               
               
               
                
            ]
        },
        
    ];

    return (
        <section className=" text-white px-12 py-16 md:py-2 md:px-8" id='proyectos'>
            <header className=" mb-12">
                <h2 className="text-3xl  font-semibold ">
                    Proyectos
                </h2>
            </header>

            <article className=" border-l-2 border-[#6d1010b4] pl-6 max-w-3xl mx-auto">
                {myProjects.map((p, i) => (
                    <div key={i} className="mb-10 ml-6 relative">
                        <span className="absolute -left-15 top-1 bg-[#6d1010] rounded-full w-6 h-6 border-2 border-[#6d1010b4]"></span>
                        <header>
                            <h3 className="text-xl font-bold text-[#6d1010] mb-1">{p.name}</h3>
                            <p className="text-gray-200">{p.description}</p>
                        </header>
                        <img src={p.img} alt={p.name} className="mt-4 rounded-lg shadow-lg max-h-60 object-cover" />
                        <footer className='flex flex-col  items-center mt-4 md:w-[484px] md:flex-row md:justify-between'>
                            <div className='md:max-w-[202px]'>
                            <span className='flex flex-wrap gap-x-2'>{p.languages}</span>
                            </div>
                            <div className='flex gap-x-2 mt-4 md:mt-0'>
                                <a
                                    className='text-xs flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-1 font-medium bg-[#6d1010b4] hover:bg-red-950 md:px-4'
                                    href="https://github.com/lautiasc10/MiHogar" target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={16} />
                                    Ver GitHub
                                </a>
                                <a
                                    className='text-xs flex items-center gap-2 border border-gray-400 rounded-2xl px-4 py-1 font-medium bg-[#6d1010b4] hover:bg-red-950'
                                    href="https://mihogar.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <FaGlobe size={16} />
                                    Ver en el sitio
                                </a>
                            </div>
                        </footer>
                    </div>
                ))}
            </article>
        </section>

    );
};

export default Projects;
