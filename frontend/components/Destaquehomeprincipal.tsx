import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const strapi = 'http://localhost:1337';

export interface Gallery {
  id: string;
  attributes: {
    Titulo_Carrousel: {
      data: {
        attributes: {
          id: number;
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          url: string;
        };
      }[];
    };
    createdAt: string;
    enabled: boolean;
    name: string;
    publishFrom: string;
    publishTo: string;
    publishedAt: string;
    updatedAt: string;
  };
}

const Destaquehomeprincipal: React.FC = () => {
  const [galleries, setGalleries] = useState<Gallery[]>([]) ;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function fetchData(){
      try {
        const res = await axios.get<{ data: Gallery[]; meta: any }>(
          `${strapi}/api/galleries?populate=*`
        );
        setGalleries(res.data.data);
        console.log(res.data.data, 'RES DEL GET');
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
    return `http://localhost:1337${src}?&q=${quality || 75}`;
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    console.log(index, " INDEX")
  };
  
  return (
    <div className="flex carousel-item ">
      <div className="carousel mb-3 mt-10 ml-200 w-3/5 mx-auto">
        {galleries.length > 0 ? (
          galleries.map((gallery, index) => (
            <div
              id={`slide${index}`}
              className={`carousel-item relative w-full ${index === currentSlide ? 'active' : ''}`}
              key={gallery.id}
            >
              {gallery.attributes.Titulo_Carrousel.data.map((image) => (
                <Image 
                  key={image.attributes.id}
                  loader={imageLoader}
                  src={image.attributes.url}
                  alt={image.attributes.name}
                  width={image.attributes.width}
                  height={image.attributes.height}
                />
              ))}
              <div className="absolute flex carousel-item justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index === 0 ? galleries.length - 1 : index}`} className="btn btn-circle" onClick={() => goToSlide(index === 0 ? galleries.length - 1 : index)}>
                  ❮
                </a>
                <a href={`#slide${index === galleries.length - 1 ? 0 : index + 1}`} className="btn btn-circle" onClick={() => goToSlide(index === galleries.length - 1 ? 0 : index + 1)}>
                  ❯
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No se pudo obtener la lista de notas.</p>
        )}
      </div>
    </div>
  );
};

export default Destaquehomeprincipal;


// export default function Destaquehomeprincipal() {
//   return (
//     <div className="flex justify-center">
//       <div className="carousel mb-3 mt-10 ml-200 w-3/5 mx-auto">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img src="/destaquehomeprincipal.png" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">❮</a> 
//             <a href="#slide2" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//         <div id="slide2" className="carousel-item relative w-full">
//           <img src="/rdnbahiablanca.png" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">❮</a> 
//             <a href="#slide3" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//         <div id="slide3" className="carousel-item relative w-full">
//           <img src="/RondaDeNegociosPBA.png" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">❮</a> 
//             <a href="#slide4" className="btn btn-circle">❯</a>
//           </div>
//         </div> 
//         <div id="slide4" className="carousel-item relative w-full">
//           <img src="/Llegamos a Chascomús para la RondaDeNegociosPBA.png" className="w-full" />
//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">❮</a> 
//             <a href="#slide1" className="btn btn-circle">❯</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
