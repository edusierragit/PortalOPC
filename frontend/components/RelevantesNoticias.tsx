import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

interface NoticiaProps {
  id: string;
  imagen: string;
  epigrafe: string;
  titular: string;
  bajada: string;
  parrafo: string;
  publishedAt: string | '';
}

const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
  return `http://localhost:1337${src}?&q=${quality || 75}`;
};

const RelevantesNoticias: React.FC<NoticiaProps> = ({  id, publishedAt,imagen, epigrafe, titular, bajada, parrafo }) => {
  return (
    <>
    <Link href={`/noticia/${encodeURIComponent(id)}`}>
 
    <div  className="relative  mt-9 mb-9 ">
    <div className="font-normal text-ls leading-2 tracking-tight text-green-600 mt-9 mb-1">{format(parseISO(publishedAt),'d MMMM yyyy', { locale: es }) }</div>

    <h3 className="text-lg font-normal text-gray-800 pb-3">
        {titular}
      </h3>
      <div className=" relative h-60  mb-3" >
      <Image      
        loader={imageLoader}
        fill={true}
        
        style={{objectFit: "cover"}}
        src={imagen} 
        alt="Imagen de la noticia" 
        
        />
    </div>
      {/* <p className="mt-1 pl-3 pr-3 h-50 left-6 font-normal text-xs leading-14 tracking-tight text-black">
        {epigrafe}
      </p> */}
      
      <span className="text-gray-700 mt-9">
        {bajada}
      </span>
      {/* <p className="mt-1 pl-3 pr-3 h-180 text-gray-700 left-6 font-normal text-xs leading-6 tracking-tight text-black">
        {parrafo}
      </p> */}
    </div>
    </Link>
    <hr className="h-1 w-60 mx-auto md:w-82 my-3 bg-gray-700 border-0 dark:bg-gray-700"/>
   
    </>
  );
};

export default RelevantesNoticias;
