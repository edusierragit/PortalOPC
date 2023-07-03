import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* import Navbar from '@/components/Navbar';
import Logosprov from '@/components/Logosprov'; */
import Noticia from '@/components/Noticia';
import { NoticiaInterface } from '@/DataInterface/DataInterface';
import { NoticiaStrapi } from '@/DataInterface/BackendInterface';
/* import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale'; */
import { convertirNoticia } from '@/adapters/noticiasAdapter';

//const strapi = 'http://localhost:1337'



const Noticias: React.FC = () => {
  const [notas, setNotas] = useState<NoticiaInterface[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: NoticiaStrapi[]; meta: any }>('/api/notas?populate=*');
        const notas: NoticiaInterface[] = res.data.data.map( data => {
          const noticia: NoticiaInterface = convertirNoticia(data);
          return noticia;
        })
        setNotas(notas);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes

         
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>      
  
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mr-9 ml-9 mb-24">

        {notas.length > 0 ? (
          notas.map(nota => (
            
            <Noticia 
            key={nota.id}
            id= {nota.id}
            imagen={nota.attributes.imagen_principal?.data[0].attributes.url?nota.attributes.imagen_principal?.data[0].attributes.formats.medium.url:"/Llegamos a Chascomús para la RondaDeNegociosPBA.png" }
            epigrafe={nota.attributes.copete}
            titular={nota.attributes.titulo_destaque}
            bajada={nota.attributes.bajada}
            parrafo={nota.attributes.short_description}
            publishedAt={nota?.attributes.publishedAt }
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

export default Noticias;
