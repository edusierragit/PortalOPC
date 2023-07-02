import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import qs from 'qs';
import Autoridad from '../components/Autoridad';
import AutoridadList from '../components/AutoridadList';
import { Persona, Cargo, Autoridades } from '@/DataInterface/DataInterface';
import { AutoridadesStrapi } from '@/DataInterface/BackendInterface';

export default function autoridades() {

  

  const [autoridades, setAutoridades] = useState<Autoridades[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // para poder traer elementos de imagenes anidades, hay que pedirlo con el populate, por defecto el strapi no trae los siguiente campos:relational, media, component, or dynamic zone fields. Si o si hay que popular 
        // ref : https://docs.strapi.io/dev-docs/api/rest/populate-select#relations--media-fields
        const query = qs.stringify(
          qs.parse('sort[0]=id&sort[1]=listview&populate[persona][populate]=*&populate[cargo][populate]=*'),
          {
            encodeValuesOnly: true, // prettify URL
          }
        ); 
        console.log(query);
        const res = await axios.get<{ data: AutoridadesStrapi[]; meta: any }>(`http://localhost:1337/api/autoridades?${query}`);
        
        // mapeamos la data que viene del servidor al modelo de datos que tenemos definido, esto nos dará libertes
        // el día que cambiemos de backend y la información venda distinta. 
       const mappedData = res.data.data.map(autoridadData => {
          // tomamos los datos del servidor,
          const personaId= autoridadData.attributes.persona.data.id;
          const personaData = autoridadData.attributes.persona.data.attributes;
          const cargoId= autoridadData.attributes.cargo.data.id;
          const cargoData= autoridadData.attributes.cargo.data.attributes;

          const listview = autoridadData.attributes.listview;
          const persona =  {
            id: personaId,
            persona: personaData
          };
          const cargo = {
            id: cargoId,
            cargo: cargoData
          }
          const autoridadObj = {
            id: autoridadData.id,
            attributes: {
              listview: listview,
              persona: persona,
              cargo: cargo
            }
          };

          return autoridadObj;
        });
        
        setAutoridades(mappedData);
        console.log(mappedData);
      //  console.log(notas[0].attributes.imagen_principal?.data, 'nota1url'); // for debugging purposes
         
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (autoridades === undefined) {
    return <>Still loading...</>;
  } else {
   // console.log(autoridades);
  }

  const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
    return `http://localhost:1337${src}?&q=${quality || 75}`;
  };
  // {/* */}
  return (
    <>
      <Logosprov />
      <Navbar />
      <div className="grid grid-cols-3  gap-4  ">
        <div className="col-span-1"></div>
        {autoridades.map((autoridad, index) => (
          (0 === index) ? (
            <Autoridad 
              id={autoridad.id}
              imagen={autoridad.attributes.listview ? autoridad.attributes.persona.persona.profile_image.data[0].attributes?.url : 'no-img'}
              firstname={autoridad.attributes.persona.persona.firstname}
              lastname={autoridad.attributes.persona.persona.lastname}
              position_name={autoridad.attributes.cargo.cargo.position_name}
              listview={autoridad.attributes.listview}
            />
          ) : null
        ))}
        
      </div>
      <div className="grid grid-cols-3 gap-4">
        {autoridades.map((autoridad, index) => (
          (0 !== index) ? (
            <Autoridad 
              id={autoridad.id}
              imagen={autoridad.attributes.listview ? autoridad.attributes.persona.persona.profile_image.data[0].attributes?.url : 'no-img'}
              firstname={autoridad.attributes.persona.persona.firstname}
              lastname={autoridad.attributes.persona.persona.lastname}
              position_name={autoridad.attributes.cargo.cargo.position_name}
              listview={autoridad.attributes.listview}
            />
          ) : null
        ))}
      </div>
      <div className="flex mt-7 justify-center">
        <div className="flex">
          <div className="h-auto mr-4"></div>
          <div className="flex flex-col justify-start pl-4">
            {autoridades.map((autoridad, index) => (
              <AutoridadList 
                id={autoridad.id}
                imagen={autoridad.attributes.listview ? autoridad.attributes.persona.persona.profile_image.data[0].attributes?.url : 'no-img'}
                firstname={autoridad.attributes.persona.persona.firstname}
                lastname={autoridad.attributes.persona.persona.lastname}
                position_name={autoridad.attributes.cargo.cargo.position_name}
                listview={autoridad.attributes.listview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
  
}
