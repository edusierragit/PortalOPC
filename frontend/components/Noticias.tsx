import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Logosprov from '@/components/Logosprov';
import Noticia from '@/components/Noticia';



const strapi = 'http://localhost:1337'

export interface NoticiaInt {
  id: string;
  attributes: {
    id: string;
    acceso_publico_registrados_funcionarios: null | string;
    bajada: string;
    copete: string;
    createdAt: string;
    date_stop_publish: string;
    date_to_publish: string;
    desarrollo: string;
    short_description: string;
    link_contenido: string;
    publishedAt: Date;
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

const Noticias: React.FC = () => {
  const [notas, setNotas] = useState<NoticiaInt[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: NoticiaInt[]; meta: any }>('http://localhost:1337/api/Notas?populate=*');
        setNotas(res.data.data);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes

         console.log(res.data.data, 'RES DEL GET')
         res.data.data.map( nota =>  console.log(nota));
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  return (
    <>      
  
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mr-9 ml-9 mb-24">
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      {/* <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
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
