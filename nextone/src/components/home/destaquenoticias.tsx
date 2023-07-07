
'use client'
import axios from 'axios';
import userSWR from 'swr';
import Image from 'next/image';
import { Destacado } from './destaque-noticias.model';
import qs from 'qs';

const strapiURL = 'http://127.0.0.1:1337';



const fetcher = async (url: string): Promise<Destacado[] | void> => {
  return await axios
    .get<{ data: Destacado[]; meta: any }>(url)
    .then(res => {
      //console.dir(res.data);
      return res.data.data;
    })
    .catch(error => {
      if (error.response.status !== 400) throw error
    })
}

function useDestacados() {

  const query = qs.stringify(
    qs.parse('populate[Destacado][populate]=*'),
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const { data, error, isLoading } = userSWR(`${strapiURL}/api/noticias-destacados-landings`, fetcher);

  console.log('UseDestacados data: ------------>')
  console.dir(data);
  return {
    destacados: data,
    isLoading,
    isError: error
  }

}

const DestacadoView = () => {
  const { destacados, isLoading, isError } = useDestacados();

  if (!destacados) return (<div>Cargando...</div>);

  return (
    <div className="hero bg-white">
      <div className="hero-content flex-col lg:flex-row">
        {destacados.map((destacado, index) => {
          let classDiv = "flex items-center space-x-4 lg:flex-row";
          const imagenPrincipal = destacado.attributes.Destacado.data.attributes.imagen_principal.data[0].attributes;
          if (destacado.attributes.Orden % 2 === 0) {
            classDiv = "flex items-center space-x-4 lg:flex-row-reverse";
          }
          return (

            <div key={index} className={classDiv}>
              <div className="max-w-sm shadow-2xl">
                <Image
                  src={imagenPrincipal.url}
                  alt={imagenPrincipal.alternativeText}
                  width={770}
                  height={300}
                />
              </div>
              <div>
                <h1 className="text-3xl  font-bold">
                  {destacado.attributes.Destacado.data.attributes.titulo_destaque}
                </h1>
                <p className="py-6 text-2xl">
                  {destacado.attributes.Destacado.data.attributes.copete}
                </p>
                <button className="btn bg-white hover:bg-white text-black">Leer más...</button>
              </div>
            </div>
          );


        })}
      </div>
    </div>
  );

}
export default DestacadoView;
