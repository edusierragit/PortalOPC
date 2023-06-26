import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function autoridades() {
  const images = [
    { 
      src: '/Victoria.jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Directora Ejecutiva', 
      nombre: 'María Victoria Anadón', 
      contacto: 'Contacto' 
    },
    { 
      
      src: '/Fernando Pagliuca.jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Subsecretario de Sistemas de Análisis, Monitoreo, Información Estratégica y Sistemas de Contratación ', 
      nombre: 'Fernando Pagliuca', 
      contacto: 'Contacto' 
    },
    { 
      src: '/IMG-20230621-WA0079 (2).jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: ' Cargo', 
      nombre: 'Nombre', 
      contacto: 'Contacto' 
    },
    { 
      src: '/Laura Lerner.jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Coordinación Administrativa', 
      nombre: 'Laura Lerner', 
      contacto: 'Contacto ' 
    },

    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Fernando Pagliuca',
      nombre: 'Subsecretario de Sistemas de Análisis, Monitoreo, Información Estratégica y Sistemas de Contratación', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Planificación e Información Estratégica', 
      nombre: 'Leandro de la Mota', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Desarrollo Tecnológico', 
      nombre: 'Sebastian Conti', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Enlace Jurisdiccional', 
      nombre: 'Federico Llorente', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Subsecretario de Contrataciones Provinciales', 
      nombre: 'Gustavo Ferri', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Interpretación Normativa y Pliegos', 
      nombre: 'Javier Vazquez', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Compra Centralizada y Convenios', 
      nombre: 'Marco Daniel Perfumo', 
      contacto: 'Contacto' 
    },
    { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Asistencia Técnico-Legal', 
      nombre: 'Federico Otonello', 
      contacto: 'Contacto' 
    },
      { 
      src: '/blankcard.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Análisis Económico Financiero', 
      nombre: 'Julio Gonzalez', 
      contacto: 'Contacto' 
    },
  
  ];

  return (
    <>
      <Logosprov />
      <Navbar />
      <div className="grid grid-cols-3  gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative border  border-gray-300 rounded p-2">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className=" text-3xl font-bold mb-5 ml-7  absolute top-2 text-black left-2">{image.nombre}</h2>
              <p className="text-1/3  mr-4 mt-8 font-bold  absolute top-2 text-black left-9">{image.cargo}</p>
              <button className="text-3xl font-bold mb-5 ml-7  absolute bottom-2 text-customTeal left-2">
                {image.contacto}
              </button>
            </div>
            <div className="mb-2">
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
