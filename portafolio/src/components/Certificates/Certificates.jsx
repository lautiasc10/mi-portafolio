import React from 'react'
import html from '../../image/Certificado-Desarrollo-Web-con-HTML-EducaciónIT (1).png'
import js from '../../image/Certificado-Javascript-desde-cero-EducaciónIT.png'
import ux from '../../image/Certificado-Ux.png'
import ma from '../../image/Certificado-Maquetador-Web-Avanzado-EducaciónIT.png'
import { useState } from 'react'


const Certificates = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const certificados = [
        {
            name: "HTML",
            img: html
        },
        {   name:"JavaScript",
            img:js
        },
        {   name: "Ux",
            img:ux,
        },
        {    name: "Maquetador Web Avanzado",
            img:ma
        }
    ]
  return (
    <section className='text-white px-12 md:py-12 md:px-8' id='certificados'>
      <header className='mb-8'>
        <h2 className='text-3xl font-semibold'>Certificados</h2>
      </header>
      <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {certificados.map((c, i) =>(
            <div key={i}
            className='relative group border border-white rounded-lg shadow-lg overflow-hidden cursor-pointer'
            onClick={()=> setSelectedCertificate(c.img)}
            >
            <img src={c.img} 
            alt={`Certificado ${i}`} 
            className='w-full h-72 object-cover transition-transform duration-300  group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black flex justify-center items-center text-center p-4 opacity-0  group-hover:opacity-100'>
                <h3 className='text-xl text-[#6d1010b4] font-bold'>Ver certificado de {c.name} </h3>
            </div>
            </div>
        ))}
      </article>

      {selectedCertificate && (
        <div className='fixed inset-0 bg-black flex justify-center items-center z-15'>
            <div className='relative max-w-3xl max-h[90vh] overflow-auto'>
                <button 
                className='absolute top-0 right-0 text-white text-2xl font-bold bg-[#6d1010] px-4 py-1 hover:cursor-pointer '
                onClick={()=> setSelectedCertificate(null)}>
                    &times;
                </button>
                <img src={selectedCertificate} 
                alt="Certificado"
                className='w-full h-auto rounded-lg shadow-xl' 
                />
            </div>

        </div>
      )}
    </section>
  )
}

export default Certificates