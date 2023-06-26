import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logosprov from '@/components/Logosprov';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import qs from 'qs';
import Autoridad from '../components/Autoridad';
import AutoridadList from '../components/AutoridadList';

export default function autoridades() {

  interface Autoridades {
    id: number;
    attributes: {
      listview: boolean;
      persona: 
      {
        id: number;
        persona:Persona;
        
      }
      puesto: 
      {  
        id: number;
        puesto:Puesto;
      }
    }
  }
  /* interface Autoridades {
    id: number;
    attributes: {
      listview: boolean;
      persona: 
      {
        data: {
          id: number;
          attributes:Persona;
        }
      }
      puesto: 
      {
        data: {
          id: number;
          attributes:Puesto;
          
        }
      }
    }
  } */

  interface Persona {
      firstname: string;
      lastname: string;
      biography?: string;
      bitrh?:Date;
      email: string;
      profile_image: any;
  }

  interface Puesto {
    position_name: string;
  }

  const [autoridades, setAutoridades] = useState<Autoridades[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // para poder traer elementos de imagenes anidades, hay que pedirlo con el populate, por defecto el strapi no trae los siguiente campos:relational, media, component, or dynamic zone fields. Si o si hay que popular 
        // ref : https://docs.strapi.io/dev-docs/api/rest/populate-select#relations--media-fields
        const query = qs.stringify(
          qs.parse('sort[0]=id&sort[1]=listview&populate[persona][populate]=*&populate[puesto][populate]=*'),
          {
            encodeValuesOnly: true, // prettify URL
          }
        ); 
        console.log(query);
        const res = await axios.get<{ data: Autoridades[]; meta: any }>(`http://localhost:1337/api/autoridades?${query}`);
        
        // mapeamos la data que viene del servidor al modelo de datos que tenemos definido, esto nos dará libertes
        // el día que cambiemos de backend y la información venda distinta. 
       const mappedData = res.data.data.map(autoridadData => {
          // tomamos los datos del servidor,
          const personaId= autoridadData.attributes.persona.data.id;
          const personaData = autoridadData.attributes.persona.data.attributes;
          const puestoId= autoridadData.attributes.puesto.data.id;
          const puestoData= autoridadData.attributes.puesto.data.attributes;

          const listview = autoridadData.attributes.listview;
          const persona =  {
            id: personaId,
            persona: personaData
          };
          const puesto = {
            id: puestoId,
            puesto: puestoData
          }
          const autoridadObj = {
            id: autoridadData.id,
            attributes: {
              listview: listview,
              persona: persona,
              puesto: puesto
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
      <div className="grid grid-cols-4 gap-4">
        {autoridades.map((autoridad, index) => (
          <Autoridad 
          id={autoridad.id}
          imagen={autoridad.attributes.listview?autoridad.attributes.persona.persona.profile_image.data[0].attributes?.url:'no-img'} 
          firstname={autoridad.attributes.persona.persona.firstname}
          lastname={autoridad.attributes.persona.persona.lastname}
          position_name= {autoridad.attributes.puesto.puesto.position_name}
          listview= {autoridad.attributes.listview}
          />
        
           
        )
       
      )}
      </div>
    <div className="grid grid-cols-3 gap-4">
        {autoridades.map((autoridad, index) => (
          <AutoridadList 
          id={autoridad.id}
          imagen={autoridad.attributes.listview?autoridad.attributes.persona.persona.profile_image.data[0].attributes?.url:'no-img'} 
          firstname={autoridad.attributes.persona.persona.firstname}
          lastname={autoridad.attributes.persona.persona.lastname}
          position_name= {autoridad.attributes.puesto.puesto.position_name}
          listview= {autoridad.attributes.listview}
          />
        
           
        )
       
      )}
      </div>
    </>
  );
}