import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

export interface Destacadoderecha {
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
          imagen_principal: any;
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

const Destacadoderecha: React.FC = () => {
  const [destacados, setDestacados] = useState<Destacadoderecha[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/noticias-destacados-landings?populate[Destacado][populate]=*');
        setDestacados(res.data.data);
        console.log(res.data.data, 'res get de noticias-destacados-landings');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row">
        {destacados.map((destacado) => {
          if (destacado.attributes.Orden === 1) {
            const imagenPrincipal = destacado.attributes.Destacado.data.attributes.imagen_principal.data[0].attributes;
            return (
              <div key={destacado.id} className="flex items-center space-x-4 lg:flex-row-reverse">
                <div className="max-w-sm shadow-2xl">
                  <Image
                    src={imagenPrincipal.url}
                    alt={imagenPrincipal.alternativeText}
                    width={770}
                    height={300}
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">
                    {destacado.attributes.Destacado.data.attributes.titulo_destaque}
                  </h1>
                  <p className="py-6 mr-7 text-2xl">
                    {destacado.attributes.Destacado.data.attributes.copete}
                  </p>
                  <button className="btn bg-white hover:bg-white text-black">Leer más...</button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Destacadoderecha;
