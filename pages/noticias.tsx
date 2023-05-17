import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Logosprov from '@/components/Logosprov';

interface Noticia {
  id: string;
  attributes: {
    acceso_publico_registrados_funcionarios: null | string;
    bajada: string;
    copete: string;
    createdAt: string;
    date_stop_publish: string;
    date_to_publish: string;
    desarrollo_nota: string;
    descripcion_corta: string;
    link_contenido: string;
    publishedAt: string;
    titulo_destaque: string;
    updatedAt: string;
    imagen_principal?: {
      data: Array<{
        attributes: {
          url: string;
        };
      }>;
    };
  };
}

const Noticias: React.FC = () => {
  const [notas, setNotas] = useState<Noticia[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: Noticia[]; meta: any }>('http://localhost:1337/api/notas?populate=*');
        setNotas(res.data.data);
        console.log(res.data.data, 'RES DEL GET'); // for debugging purposes
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Logosprov />
      <Navbar />

      <div>
        {notas.length > 0 ? (
          notas.map(nota => (
            <div key={nota.id}>
              <h2>{nota.attributes.titulo_destaque}</h2>
              <p>{nota.attributes.descripcion_corta}</p>
              <p>{nota.attributes.desarrollo_nota}</p>
              {nota.attributes.acceso_publico_registrados_funcionarios && (
                <p>Acceso Público Registrados Funcionarios: {nota.attributes.acceso_publico_registrados_funcionarios}</p>
              )}
              {nota.attributes.bajada && <p>Bajada: {nota.attributes.bajada}</p>}
              {nota.attributes.copete && <p>Copete: {nota.attributes.copete}</p>}
              {nota.attributes.createdAt && <p>Created At: {nota.attributes.createdAt}</p>}
              {nota.attributes.date_stop_publish && <p>Date Stop Publish: {nota.attributes.date_stop_publish}</p>}
              {nota.attributes.date_to_publish && <p>Date to Publish: {nota.attributes.date_to_publish}</p>}
              {nota.attributes.link_contenido && <p>Link Contenido: {nota.attributes.link_contenido}</p>}
              {nota.attributes.publishedAt && <p>Published At: {nota.attributes.publishedAt}</p>}
              {nota.attributes.updatedAt && <p>Updated At: {nota.attributes.updatedAt}</p>}
              {nota.attributes.imagen_principal && nota.attributes.imagen_principal.data.length > 0 && (
                <img src={nota.attributes.imagen_principal.data[0].attributes.url} alt="Imagen Principal" />
              )}
              {/* Render other properties of the nota object */}
            </div>
          ))
        ) : (
          <p>No se pudo obtener la lista de notas.</p>
        )}
      </div>
    </>
  );
};

export default Noticias;
