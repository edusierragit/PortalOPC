import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Logosprov from '@/components/Logosprov';

interface Noticia {
  id: string;
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
}

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<{ data: Noticia[]; meta: any }>('http://localhost:1337/api/notas');
        setNoticias(res.data.data);
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
        {noticias.length > 0 ? (
          noticias.map(noticia => (
            <div key={noticia.id}>
              <h2>{noticia.titulo_destaque}</h2>
              <p>{noticia.descripcion_corta}</p>
              <p>{noticia.desarrollo_nota}</p>
              <p>Acceso Público Registrados Funcionarios: {noticia.acceso_publico_registrados_funcionarios}</p>
              <p>Bajada: {noticia.bajada}</p>
              <p>Copete: {noticia.copete}</p>
              <p>Created At: {noticia.createdAt}</p>
              <p>Date Stop Publish: {noticia.date_stop_publish}</p>
              <p>Date to Publish: {noticia.date_to_publish}</p>
              <p>Link Contenido: {noticia.link_contenido}</p>
              <p>Published At: {noticia.publishedAt}</p>
              <p>Updated At: {noticia.updatedAt}</p>
              {/* Render other properties of the noticia object */}
            </div>
          ))
        ) : (
          <p>No se pudo obtener la lista de noticias.</p>
        )}
      </div>
    </>
  );
};

export default Noticias;
