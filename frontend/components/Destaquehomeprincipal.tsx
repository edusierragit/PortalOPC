import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
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
   
      <div className="flex carousel-item">
        <div className="carousel mb-3 mt-10 ml-200 w-3/5 mx-auto">
          {galleries.length > 0 ? (
            galleries.map((gallery, index) => (
              <div
                id={`slide${index}`}
                className={`carousel-item relative w-full ${index === currentSlide ? 'active' : ''}`}
                key={gallery.id}
              >
                {gallery.attributes.Titulo_Carrousel.data.map((image, imageIndex) => (
                  <div key={image.attributes.id}>
                    <Image
                      loader={imageLoader}
                      src={image.attributes.url}
                      alt={image.attributes.name}
                      width={image.attributes.width}
                      height={image.attributes.height}
                    />
                  </div>
                ))}
                <div className="absolute flex carousel-item justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? galleries.length - 1 : index}`} className="btn btn-circle" onClick={() => goToSlide(index === 0 ? galleries.length - 1 : index)}>
                    ❮
                  </a>
                  <a href={`#slide${index === galleries.length - 1 ? 0 : index + 1}`} className="btn btn-circle" onClick={() => goToSlide(index === galleries.length - 1 ? 0 : index + 1)}>
                    ❯
                  </a>
                </div>
                <div className="text-xl font-bold mb-12 ml-7  absolute bottom-2 text-white left-2"><h2> {format(parseISO(gallery.attributes.publishFrom), "dd 'de' MMMM yyyy", { locale: es })}</h2>
                </div>
                <div className="text-3xl font-bold mb-5 ml-7  absolute bottom-2 text-white left-2">
                  <h2>{gallery.attributes.name}</h2>
                </div>
              </div>
            ))
          ) : (
            <p>No se pudo obtener la lista de notas.</p>
          )}
        </div>
      </div>
  
    );
  
}
export default Destaquehomeprincipal;
