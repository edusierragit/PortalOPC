import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NoticiaProps {
  id:string;
  imagen: string;
  epigrafe: string;
  titular: string;
  bajada: string;
  parrafo: string;
}

const imageLoader = ({ src, quality }) => {
  return `http://localhost:1337${src}?&q=${quality || 75}`;
};
 

const Noticia: React.FC<NoticiaProps> = ({  id, imagen, epigrafe, titular, bajada, parrafo }) => {
  return (
    <Link href={`/noticia/${encodeURIComponent(id)}`}>

    <div  className="rounded-lg bg-gray-100 relative top-12  w-541 h-859">
      <div className=" relative w-541 h-452 md:w-541 md:h-96">
      <Image      
        loader={imageLoader}
        layout="fill"
        className="rounded-t-lg"
        src={imagen} 
        alt="Imagen de la noticia" 
        
        />
    </div>
      <p className="mt-1 pl-3 pr-3 h-50 left-6 font-normal text-xs leading-14 tracking-tight text-black">
        {epigrafe}
      </p>
      <h1 className="mt-1 pl-3 pr-3 h-50 left-6 font-bold text-xl leading-14 tracking-tight text-black">
        {titular}
      </h1>
      <h2 className="mt-1 pl-3 pr-3 h-50 left-6 font-semibold text-sm leading-14 tracking-tight text-black">
        {bajada}
      </h2>
      <p className="mt-1 pl-3 pr-3 h-180 text-gray-700 left-6 font-normal text-xs leading-6 tracking-tight text-black">
        {parrafo}
      </p>
    </div>
    </Link>
  );
};

export default Noticia;
