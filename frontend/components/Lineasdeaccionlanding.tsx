import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LineaDeAccion {
  id: number;
  attributes: {
    Titulo: string;
    Bajada: string | null;
    Icono: {
      data: {
        attributes: {
          name: string;
          alternativeText: string | null;
          url: string;
        };
      };
    };
    Orden: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    lineasdeaccionlanding: {
      data: {
        id: number;
        attributes: {
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          Titulo: string;
          bajada: string;
        };
      };
    };
  };
}

const Lineasdeaccionlanding: React.FC = () => {
  const [lineasdeaccion, setLineasdeaccion] = useState<LineaDeAccion[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/lineasdeaccionlandingtitulos?populate=*');
        setLineasdeaccion(res.data.data);
        // console.log(res.data.data, 'res get api/lineasdeaccionlandingtitulos?populate=*');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Ordenar las lineasdeaccion según el atributo "Orden"
  const sortedLineasDeAccion = lineasdeaccion.sort((a, b) => a.attributes.Orden - b.attributes.Orden);

  const firstThree = sortedLineasDeAccion.slice(0, 3);
  const lastThree = sortedLineasDeAccion.slice(3, 6);

  return (
    <div className="flex flex-col items-center mt-4 space-y-4">
      {lineasdeaccion.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-center">
            {lineasdeaccion[0].attributes.lineasdeaccionlanding.data.attributes.Titulo}
          </h2>
          <p className="text-center">{lineasdeaccion[0].attributes.lineasdeaccionlanding.data.attributes.bajada}</p>
        </>
      )}
      <div className="flex justify-center mt-4 space-x-8">
        <div className="flex flex-col space-y-2">
          {firstThree.map((linea) => (
            <div key={linea.id} className="flex items-center justify-start space-x-2">
              {linea.attributes.Icono && (
                <img
                  src={linea.attributes.Icono.data.attributes.url}
                  alt={linea.attributes.Icono.data.attributes.alternativeText || ''}
                  className="w-16 h-16"
                />
              )}
              <div className="flex flex-col">
                <h3 className="text-base font-bold">{linea.attributes.Titulo}</h3>
                {linea.attributes.Bajada && <p>{linea.attributes.Bajada}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          {lastThree.map((linea) => (
            <div key={linea.id} className="flex items-center justify-start space-x-2">
              {linea.attributes.Icono && (
                <img
                  src={linea.attributes.Icono.data.attributes.url}
                  alt={linea.attributes.Icono.data.attributes.alternativeText || ''}
                  className="w-16 h-16"
                />
              )}
              <div className="flex flex-col">
                <h3 className="text-base font-bold">{linea.attributes.Titulo}</h3>
                {linea.attributes.Bajada && <p>{linea.attributes.Bajada}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
              }  
    
export default Lineasdeaccionlanding;
