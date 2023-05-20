import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Noticiaslanding() {
  const images = [
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/blankcard.png', alt: 'Blank', width: 900, height: 251 },

  
  ];

  return (
    <>
      <Logosprov />
      <Navbar />
      <div className="grid  grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative border border-gray-300 rounded p-4">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-2">Fecha Noticia</h2>
              <h2 className="text-lg font-bold mb-2 text-center">Titular Noticia</h2>
              <p className="text-gray-800 font-sans encode-sans text-center">Bajada o Subtitulo</p>
              <button className="p-2 font-bold justify-botton text-customTeal">
                contacto
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
