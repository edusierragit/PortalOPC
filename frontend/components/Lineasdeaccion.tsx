import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

interface LineaDeAccion {
  id: number;
  attributes: {
    LinkContenido: null | string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Nombre: string;
    Orden: number;
    iconos: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const Lineasdeaccion: React.FC = () => {
  const [lineasdeaccion, setLineasdeaccion] = useState<LineaDeAccion[]>([]);
  const colors = ['bg-customi1', 'bg-customi2', 'bg-customi3', 'bg-customi4', 'bg-customi5', 'bg-customi6'];
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/lineasdeacciones?populate=*');
        setLineasdeaccion(res.data.data);
        console.log(res.data.data, 'res get api/lineasdeacciones?populate=*');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleClick = (index: number) => {
    // Lógica a ejecutar cuando se hace clic en un icono
    console.log(`Icono ${index + 1} clickeado`);
  };

  // Ordenar las lineasDeAccion según el atributo "Orden"
  const sortedLineasDeAccion = lineasdeaccion.sort((a, b) => a.attributes.Orden - b.attributes.Orden);

  return (
    <div className="flex justify-center ml-24  mt-4 flex-wrap space-y-4">
      <div className="flex flex-col">
        <div className="flex justify-center space-x-4">
          {sortedLineasDeAccion.slice(0, 3).map((icon, index) => (
            <button
              key={icon.id}
              className={classNames('w-44 h-50 flex items-center justify-center rounded-lg', colors[index])}
              style={{ marginBottom: '1rem' }} // Espaciado vertical en la primera fila
              onClick={() => handleClick(index)}
            >
              <div className="relative w-32 h-40">
                <Image src={icon.attributes.iconos.data.attributes.url} alt={`Icon ${index + 1}`} layout="fill" objectFit="contain" />
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {sortedLineasDeAccion.slice(3, 6).map((icon, index) => (
            <button
              key={icon.id}
              className={classNames('w-44 h-50 flex items-center justify-center rounded-lg', colors[index + 3])}
              onClick={() => handleClick(index + 3)}
            >
              <div className="relative w-24 h-40">
                <Image src={icon.attributes.iconos.data.attributes.url} alt={`Icon ${index + 4}`} layout="fill" objectFit="contain" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Lineasdeaccion;

