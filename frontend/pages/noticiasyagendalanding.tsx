import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


export default function Noticiasyagendalanding() {
  const images = [
    { 
      src: '/RondaDeNegociosPBA.png', 
      alt: 'Blank', 
      width: 900, 
      height: 251, 
      fecha: 'Mayo 24, 2023',
      titulo: 'SE INAUGURÓ EL HOSPITAL CENTRAL DE ALTA COMPLEJIDAD DE PILAR',
      bajada: 'Descripción corta de la imagen',
      descripcion: 'El gobernador de la Provincia de Buenos Aires, Axel Kicillof, participó del acto de inauguración del nuevo nosocomio para los y las pilarenses.',
      cargo: 'Directora Ejecutiva', 
      nombre: 'María Victoria Anadón', 
      contacto: 'Contacto' 
    },
    // Añade más objetos de imagen aquí si es necesario
  ];


  return (
    <>
      <Logosprov />
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative border border-gray-300 rounded p-4">
            <div className="mb-2">
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">{image.fecha}</p>
              <h2 className="text-lg font-bold my-2">{image.titulo}</h2>
              <p className="text-gray-800 mb-2">{image.bajada}</p>
              <p className="text-gray-600">{image.descripcion}</p>
              <div className="flex flex-col items-center mt-4">
                <p className="text-gray-800 font-sans encode-sans">{image.cargo}</p>
                <h3 className="text-lg font-bold">{image.nombre}</h3>
                <button className="p-2 font-bold text-white bg-teal-500 rounded mt-2">
                  {image.contacto}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
