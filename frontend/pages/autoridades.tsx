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
      src: '/Laura Lerner.jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: 'Director Provincial de Coordinación Administrativa', 
      nombre: 'Laura Lerner', 
      contacto: 'Contacto ' 
    },
    { 
      src: '/IMG-20230621-WA0079 (2).jpg', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      cargo: ' Subsecretario de Contrataciones Provinciales', 
      nombre: 'Gustavo Ferri', 
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
 
    
 
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Fernando Pagliuca',
    //   nombre: 'Subsecretario de Sistemas de Análisis, Monitoreo, Información Estratégica y Sistemas de Contratación', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Planificación e Información Estratégica', 
    //   nombre: 'Leandro de la Mota', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Desarrollo Tecnológico', 
    //   nombre: 'Sebastian Conti', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Enlace Jurisdiccional', 
    //   nombre: 'Federico Llorente', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Subsecretario de Contrataciones Provinciales', 
    //   nombre: 'Gustavo Ferri', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Interpretación Normativa y Pliegos', 
    //   nombre: 'Javier Vazquez', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Compra Centralizada y Convenios', 
    //   nombre: 'Marco Daniel Perfumo', 
    //   contacto: 'Contacto' 
    // },
    // { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Asistencia Técnico-Legal', 
    //   nombre: 'Federico Otonello', 
    //   contacto: 'Contacto' 
    // },
    //   { 
    //   src: '/blankcard.png', 
    //   alt: 'Blank', 
    //   width: 900, 
    //   height: 251, 
    //   cargo: 'Director Provincial de Análisis Económico Financiero', 
    //   nombre: 'Julio Gonzalez', 
    //   contacto: 'Contacto' 
    // },
  
  ];

  return (
    <>
      <Logosprov />
      <Navbar />
      <div className="grid grid-cols-4 mt-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative border  border-gray-300 rounded p-2">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className=" text-2xl font-bold mb-5 ml-7  absolute top-2 text-black left-2" style={{ opacity: '0.8' }}>{image.nombre}</h2>
              <p className="text-1/4  mr-4 mt-8 font-bold   absolute top-2 text-black left-9" style={{ opacity: '0.8' }}>{image.cargo}</p>
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
      <div className="flex mt-7 justify-center">
  <div className="flex">
    <div className="border-l  border-gray-300 h-auto mr-4"></div>
    <div className="flex flex-col justify-start pl-4">
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Directora Ejecutiva</span>
        <br />
        <span className="text-black">María Victoria Anadón</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Jefa de Gabinete</span>
        <br />
        <span className="text-black">Laura Lerner</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Coordinación Administrativa</span>
        <br />
        <span className="text-black">Ignacio Chillier</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Responsable de la Unidad de Capacitación Permanente</span>
        <br />
        <span className="text-black">Pablo Guitera</span>
      </p>
      <p className="text-center  mt-1 font-sans">
        <span className="text-customTeal font-bold">Subsecretario de Sistemas de Análisis, Monitoreo, Información Estratégica y Sistemas de Contratación</span>
        <br />
        <span className="text-black">Fernando Pagliuca</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Planificación e Información Estratégica</span>
        <br />
        <span className="text-black">Leandro de la Mota</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Desarrollo Tecnológico</span>
        <br />
        <span className="text-black">Sebastian Conti</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Enlace Jurisdiccional</span>
        <br />
        <span className="text-black">Federico Llorente</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Subsecretario de Contrataciones Provinciales</span>
        <br />
        <span className="text-black">Gustavo Ferri</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Interpretación Normativa y Pliegos</span>
        <br />
        <span className="text-black">Javier Vazquez</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Compra Centralizada y Convenios Marco</span>
        <br />
        <span className="text-black">Daniel Perfumo</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Asistencia Técnico-Legal</span>
        <br />
        <span className="text-black">Federico Otonello</span>
      </p>
      <p className="text-center mt-1 font-sans">
        <span className="text-customTeal font-bold">Director Provincial de Análisis Económico Financiero</span>
        <br />
        <span className="text-black text-1/4">Julio Gonzalez</span>
      </p>
    </div>
  </div>
</div>

    </>
  );
}
