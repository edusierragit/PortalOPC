import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const strapi = 'http://localhost:1337';

export interface Destacado1 {
  id: number;
  attributes: {
    Orden: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Destacado: {
      data: {
        id: number;
        attributes: {
          titulo_destaque: string;
          copete: string;
          bajada: string;
          date_to_publish: string | null;
          date_stop_publish: string | null;
          link_contenido: string;
          acceso_publico_registrados_funcionarios: string | null;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          desarrollo: string;
          short_description: string;
        };
      };
    };
  };
}
export interface Notas {
  id: number;
  attributes: {
    acceso_publico_registrados_funcionarios: string | null;
    bajada: string;
    copete: string;
    createdAt: string;
    date_stop_publish: string | null;
    date_to_publish: string | null;
    desarrollo: string;
    imagen_principal: {
      data: {
        id: number;
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: {
            large: { url: string; width: number; height: number };
            small: { url: string; width: number; height: number };
            medium: { url: string; width: number; height: number };
            thumbnail: { url: string; width: number; height: number };
          };
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string | null;
          size: number;
          updatedAt: string;
          url: string;
          width: number;
        };
      }[];
    };
    imagen_secundaria: { data: Array<any> };
    imagenes_carrito: { data: Array<any> };
    link_contenido: string;
    publishedAt: string;
    short_description: string;
    titulo_destaque: string;
    updatedAt: string;
    Orden: number
  };
}


const Destacado1: React.FC = () => {



  const [destacados, setDestacados] = useState<Destacado1[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: Destacado1[]; meta: any }>(
          `${strapi}/api/noticias-destacados-landings?populate=*`
        );
        setDestacados(res.data.data);
        console.log(res.data.data, 'res get de noticias-destacados-landings');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
    return `http://localhost:1337${src}?&q=${quality || 75}`;
  };

  const [notas, setNotas] = useState<Notas[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: Notas[]; meta: any }>(
          `${strapi}/api/notas?populate=*`
        );
        setNotas(res.data.data);
        console.log(res.data.data, 'res get de notas');
      } catch (error) {
        console.error(error);
      }
    }


    fetchData();
  }, []);
  return (
    <div className="hero mt-5  bg-base-100">
    <div className="hero-content flex-col lg:flex-row ">
    <img src="/Hospital Central de Alta Complejidad de Pilar.png" className="max-w-sm shadow-2xl" />
      <div>
        <h1 className="text-3xl font-bold">Se inauguro el Hospital Central de alta complejidad en PILAR</h1>
        <p className="py-6 text-2xl">“Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad"</p>
        <button className="btn bg-white hover:bg-customTeal text-black">Leer mas...</button>
      </div>
    </div>
    </div>
  );
}

export default Destacado1;

