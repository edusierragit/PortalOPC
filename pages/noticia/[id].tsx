import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function NoticiaDetail() {
  const [nota, setNota] = useState<NoticiaInt>();
  interface NoticiaInt {
    id: string;
    attributes: {
      acceso_publico_registrados_funcionarios: null | string;
      bajada: string;
      copete: string;
      createdAt: string;
      date_stop_publish: string;
      date_to_publish: string;
      desarrollo: string;
      short_description: string;
      link_contenido: string;
      publishedAt: string;
      titulo_destaque: string;
      updatedAt: string;
      imagen_principal?: {
        data: Array<{
          attributes: {
            alternativeText: string | null;
            caption: string | null;
            createdAt: string;
            ext: string;
            formats: any | null;
            hash: string;
            height: number;
            mime: string;
            name: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: any | null;
            size: number;
            updatedAt: string;
            url: string;
            width: number;
  
          };
        }>;
      };
    };
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: NoticiaInt; meta: any }>(`http://localhost:1337/api/notas/1?populate=*`);
        setNota(res.data.data);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes

         console.log(res.data.data, 'RES DEL GET')
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const imageLoader = ({ src , quality }) => {
    return `http://localhost:1337${src}?&q=${quality || 75}`;
  };
    
  return (
    <>
      <Logosprov />
      <Navbar />
       <div className="grid grid-cols-8 gap-3">
        <div className="col-span-1"></div>
        <div className="col-span-5">
          <div className="font-normal text-xs leading-2 tracking-tight text-green-600">{/* {nota?.attributes.publishedAt} */}</div>
          <div className="font-normal text-lg leading-9 tracking-tight text-black font-bold	"><h1>{nota?.attributes.titulo_destaque}</h1></div>
          <div className="font-normal text-sm leading-1 tracking-tight text-grey">{nota?.attributes.copete}</div>
          <div className=" relative w-541 h-452 md:w-541 md:h-96">
          <Image      
            loader={imageLoader}
            layout="fill"
            className="rounded-t-lg" 
            src={nota?.attributes.imagen_principal?.data[0].attributes.url?nota?.attributes.imagen_principal?.data[0].attributes.formats.medium.url:"/Llegamos a Chascomús para la RondaDeNegociosPBA.png" }
            alt="Imagen de la noticia" 
            
            />
        </div>
          <div className="font-normal tracking-tight text-black">
            <p>{nota?.attributes.desarrollo}</p>
          </div>
          
        </div>
        <div className="col-span-2"> Lateral izq</div>
      </div> 
    </>
  );
}
