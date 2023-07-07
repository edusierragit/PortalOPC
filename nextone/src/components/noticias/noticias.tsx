'use client'
import React, { useEffect, useState } from 'react';
import useSWR from "swr";
import Image from 'next/image';
import axios from 'axios';
import { Noticia, NoticiaStrapi, NoticiaProps } from './noticia.model';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const strapiURL = 'http://127.0.0.1:1337'

// esta función es la que utilizamos para poder traernos toda la data 
const fetcher = async (url: string): Promise<Noticia[] | void> => {
    return await axios
        .get<{ data: NoticiaStrapi[]; meta: any }>(url)
        .then(res => {
            console.dir(res.data);
            
            const noticias: Noticia[] = res.data.data.map(not => new Noticia(not));
            console.dir(noticias);
            return noticias;
        })
        .catch(error => {
            if (error.response.status !== 400) throw error
        })
}
// esta función es la que utilizamos para poder traernos toda la data de la noticia
const fetcherNoticia = async (url: string): Promise<Noticia | void> => {
    return await axios
        .get<{ data: NoticiaStrapi; meta: any }>(url)
        .then(res => {
            console.dir(res.data);
            
            const noticia: Noticia = new Noticia(res.data.data);
            console.dir(noticia);
            return noticia;
        })
        .catch(error => {
            if (error.response.status !== 400) throw error
        })
}
// sería un Hook personalizado, para poder reutilizar en todos lados, devuelve el objeto notidias entro otras cosas
function useNoticias() {
    const { data, error, isLoading } = useSWR(`${strapiURL}/api/notas?populate=*`, fetcher);
    console.log('useNoticias data: ------------>')
    console.dir(data);


    return {
        noticias: data,
        isLoading,
        isError: error
    }

}

// sería un Hook personalizado, para poder reutilizar en todos lados, devuelve el objeto notidias entro otras cosas
function useNoticia(id: number) {
    const { data, error, isLoading } = useSWR(`/api/notas/${id}?populate=*`, fetcherNoticia);
    console.log('useNoticia data: ------------>')
    console.dir(data);


    return {
        noticia: data,
        isLoading,
        isError: error
    }

}

const NoticiasView = () => {
    const { noticias, isLoading, isError } = useNoticias();

    return (
        <>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mr-9 ml-9 mb-24">

                {(noticias && noticias.length > 0) ? (
                    noticias.map( (nota, index) => (

                        <NoticiaBoxView
                            key={index}
                            id={nota.id}
                            imagen={nota.imagen_principal[0].attributes.url}
                            //imagen={nota.imagen_principal.length >0? nota.imagen_principal[0].attributes.url : "/Llegamos a Chascomús para la RondaDeNegociosPBA.png"}
                            epigrafe={nota.copete}
                            titular={nota.titulo_destaque}
                            bajada={nota.bajada}
                            parrafo={nota.short_description}
                            publishedAt={nota?.publishedAt}
                        //publishedAt={format(nota?.attributes.publishedAt,'d MMMM yyyy', { locale: es }) }
                        />


                    ))
                ) : (
                    <p>No se pudo obtener la lista de notas.</p>
                )}
            </div>
        </>
    );
};


const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
    return `${strapiURL}${src}?&q=${quality || 75}`;
};

export const NoticiaBoxView = ({ id, imagen, epigrafe, titular, bajada, parrafo }: NoticiaProps) => {
    return (
        <Link href={`/noticias/${encodeURIComponent(id)}`} as={`/noticias/${id}`}>

            <div className="rounded-lg  relative top-12  w-541 h-859 md:w-241 md:h-496">
                <div className="relative  w-241 h-96  sm:w-150 sm:h-246 " >
                    <Image
                        loader={imageLoader}
                        fill={true}
                        style={{ objectFit: "cover" }}
                        src={imagen}
                        alt="Imagen de la noticia"
                        /* width={541}
                        height={96} */
                    />
                   
                </div>
                <p className="mt-1  h-50 left-6 font-normal text-xs leading-14 tracking-tight text-black">
                    {epigrafe}
                </p>
                <h1 className="mt-1  h-50 left-6 font-bold text-xl leading-14 tracking-tight text-black">
                    {titular}
                </h1>
                <h2 className="mt-1 h-50 left-6 font-semibold text-sm leading-14 tracking-tight text-black">
                    {bajada}
                </h2>
                <p className="mt-1 h-180 text-gray-700 left-6 font-normal text-xs leading-6 tracking-tight text-black">
                    {parrafo}
                </p>
            </div>
        </Link>
    );
};

export const NoticiaView = ({id}:{id:number}) => {
    // obtengo una noticia por ID
    const { noticia, isLoading, isError } = useNoticia(id);
    // Obtenemos todas las noticias, mejorar esto de las relevantes
    const { noticias } = useNoticias();

   if(!noticia) return (<div>Cargando</div>);
   if(!noticias) return (<div>Cargando</div>);

    return (
        <>
        <div className="flex flex-col md:flex-row px-3 md:px-9">
        {/* Columna 1 */}

        <div className="md:w-4/5 w-full">
         <div className="font-normal text-customTeal   text-ls leading-2 tracking-tight  mt-9 mb-1">{noticia.volanta?noticia.volanta:format(noticia.publishedAt,'d MMMM yyyy', { locale: es })}</div>
          <div className="text-lg leading-9 tracking-tight text-black font-bold mt-3">
            <h1>{noticia.titulo_destaque}</h1>
          </div>
          <div className="font-normal text-sm leading-1 tracking-tight text-grey mb-3">{noticia.copete}</div>

          {noticia.imagen_principal.length >= 2 ? (
            <div className="carousel mb-10 mt-10 w-241 h-196 md:w-541 md:h-296">
              {noticia.imagen_principal.map((image, index) => (
                <div id={`slide${index + 1}`} className="carousel-item relative w-full" key={index}>
                  <img src={ image?.attributes?.formats?.medium?.url} className="w-full" alt="imagen"/>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${index}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${index + 2}`} className="btn btn-circle">❯</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative w-241 h-96 md:w-341 md:h-96">
              <Image
                loader={imageLoader}
                layout="fill"
                objectFit="cover"
                src={noticia.imagen_principal[0]?.attributes?.formats?.medium?.url || "/Llegamos a Chascomús para la RondaDeNegociosPBA.png"}
                alt="Imagen de la noticia"
              />
            </div>)
             
        }
          

          <div className="font-normal text-lg tracking-tight text-black mt-6 indent-1 md:indent-8 justify-center text-justify">
            <div dangerouslySetInnerHTML={{ __html: `${noticia.desarrollo}` }} />
          </div>
          <div className=" text-right mt-9"><span>Fecha:</span> <span className="font-normal text-customTeal  leading-2 tracking-tight">{format(noticia.publishedAt,'d MMMM yyyy', { locale: es })}</span></div>
        
        </div>

            {/* Columna 2 */}
            <div className="md:w-1/5 w-full md:mt-0 mt-4 md:pl-4">
            <h2 className="text-xl font-bold text-gray-80 mt-6 pl-3">Noticias relevantes</h2>
            <hr className="h-0.5 my-3 bg-gray-700 border-0 dark:bg-gray-700 ml-3" />

             {noticias.length > 0 ? (
                noticias.map(nota => (
                <RelevantesNoticiasBoxView
                    key={nota.id}
                    id={nota.id}
                    imagen={nota.imagen_principal[0]?.attributes?.formats?.medium?.url || "/Llegamos a Chascomús para la RondaDeNegociosPBA.png"}
                /*  epigrafe={nota.attributes.copete} */
                    titular={nota.titulo_destaque}
                    bajada={nota.bajada}
                    /* parrafo={nota.attributes.short_description} */
                    publishedAt={nota.publishedAt}
                />
                ))
            ) : (
                <p>No se pudo obtener la lista de notas.</p>
            )} 
            </div>
        </div>

        </>
    );

}

// Muestra un rectandulo con la información para las notas relevantas, en principio se usan para la vista de Detalle de noticia en la columna de la izquierda. 
const RelevantesNoticiasBoxView = ({  id, publishedAt,imagen, titular, bajada }: NoticiaProps) => {
    return (
      <>
       
      <Link href={`/noticias/${encodeURIComponent(id)}`}>
   
      <div  className="relative  mt-9 mb-9 ">
      <div className="font-normal text-ls leading-2 tracking-tight text-customTeal  mt-9 mb-1">{format(publishedAt,'d MMMM yyyy', { locale: es }) }</div>
  
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
        
        <span className="text-gray-600 mt-9">
          {bajada}
        </span>
        {/* <p className="mt-1 pl-3 pr-3 h-180 text-gray-700 left-6 font-normal text-xs leading-6 tracking-tight text-black">
          {parrafo}
        </p> */}
      </div>
      </Link>
      <hr className="h-0.5 w-60 mx-auto md:w-82 my-3 bg-gray-600 border-0 dark:bg-gray-600"/>
     
      </>
    );
  };



export default NoticiasView;
