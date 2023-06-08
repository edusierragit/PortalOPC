import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logosprov from '@/components/Logosprov';
import Footerpageopc from '@/components/Footerpageopc';
import Navbar from '@/components/Navbar';
import RelevantesNoticias from '@/components/RelevantesNoticias';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function NoticiaDetail() {
  const router = useRouter();
  const { id } = router.query;

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
      publishedAt: string | "";
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
  const [nota, setNota] = useState<NoticiaInt>();

  const [notasRelevantes, setNotasRelevantes] = useState<NoticiaInt[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: NoticiaInt[]; meta: any }>('http://localhost:1337/api/notas?populate=*');
        setNotasRelevantes(res.data.data);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes

         
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {

        const res = await axios.get<{ data: NoticiaInt; meta: any }>(`http://localhost:1337/api/notas/${id}?populate=*`);
        // esto lo trabajo aca, cuando llega la data, porque sino en el template, daba un error de undefinde, no se bien porque, pero capaz que es por la asincronia. seguir aprendiendo debes
        res.data.data.attributes.publishedAt = format(parseISO(res.data.data.attributes.publishedAt),'d MMMM yyyy', { locale: es });
        setNota(res.data.data);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes
      
      console.log(res.data.data.attributes.publishedAt );
         //console.log(res.data.data, 'RES DEL GET');
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
        <div className="col-span-5 px-6">
          <div className="font-normal text-ls leading-2 tracking-tight text-green-600 mt-9 mb-1 mt-9">{nota?.attributes.publishedAt }</div>
          <div className="font-normal text-lg leading-9 tracking-tight text-black font-bold	mt-3"><h1>{nota?.attributes.titulo_destaque}</h1></div>
          <div className="font-normal text-sm leading-1 tracking-tight text-grey mb-3">{nota?.attributes.copete}</div>
          <div className=" relative w-541 h-452 md:w-541 md:h-96">
          <Image      
            loader={imageLoader}
            fill={true}
            className="rounded-t-lg" 
            style={{objectFit: "cover"}}
            src={nota?.attributes.imagen_principal?.data[0].attributes.url?nota?.attributes.imagen_principal?.data[0].attributes.formats.medium.url:"/Llegamos a Chascomús para la RondaDeNegociosPBA.png" }
            alt="Imagen de la noticia" 
            
            />
        </div>
          <div className="font-normal text-lg tracking-tight text-black mt-6 indent-1 md:indent-8 justify-center text-justify ">
            <p>{nota?.attributes.desarrollo}</p>
          </div>
          
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-gray-80 mt-6 pl-3 underline underline-offset-4">Noticias relevantes</h2>
          
          {notasRelevantes.length > 0 ? (
          notasRelevantes.map(nota => (
           

            <RelevantesNoticias 
              key={nota.id}
              id= {nota.id}
              imagen={nota.attributes.imagen_principal?.data[0].attributes.url?nota.attributes.imagen_principal?.data[0].attributes.formats.medium.url:"/Llegamos a Chascomús para la RondaDeNegociosPBA.png" }
              epigrafe={nota.attributes.copete}
              titular={nota.attributes.titulo_destaque}
              bajada={nota.attributes.bajada}
              parrafo={nota.attributes.short_description}
              publishedAt = {nota?.attributes.publishedAt }
               />

            
          ))
        ) : (
          <p>No se pudo obtener la lista de notas.</p>
        )}
          
           
          </div>
      </div> 
 <div className='mb-9'></div>
      <Footerpageopc/>

    </>
  );
}
