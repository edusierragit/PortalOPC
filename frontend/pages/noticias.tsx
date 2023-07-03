import Noticias from '@/components/Noticias';
import React from 'react';

interface Noticia {
  titulo: string;
  descripcion: string;
  fecha: string;
}

type DestacadoProps = {
  noticias: Noticia[];
};

const Destacado: React.FC<DestacadoProps> = () => {
  return (
    <Noticias/>
    
  );
};

export default Destacado;

