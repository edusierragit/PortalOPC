import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';

import Noticias from '@/components/Noticias';

import Footerpageopc from '@/components/Footerpageopc';

export default function Noticiaslanding() {
  const images = [
    { src: '/RondaDeNegociosPBA.png', alt: 'Blank', width: 900, height: 251  },
    { src: '/Llegamos a Chascomús para la RondaDeNegociosPBA.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/Capacitacion Talleres.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/Hospital Central de Alta Complejidad de Pilar.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/rdnbahiablanca.png', alt: 'Blank', width: 900, height: 251 },
    { src: '/RondaDeNegociosPBA.png', alt: 'Blank', width: 900, height: 251 },

  ];


  return (
    <>
      <Logosprov />
      <Navbar />
      
      <Noticias />
     
       <Footerpageopc/>
      
    </>
  );
}
