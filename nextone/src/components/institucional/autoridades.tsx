import Image from 'next/image';
import qs from 'qs';
import { Autoridad, AutoridadStrapi } from './autoridad.model';
/* import axios  from 'axios';
import { use } from 'react'; */
const strapiURL = 'http://127.0.0.1:1337';


export const getAutoridades  = async () => {
  console.log('getAutoridades to begin')

    const query = qs.stringify(
      qs.parse('sort[0]=id&sort[1]=listview&populate[persona][populate]=*&populate[cargo][populate]=*'),
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    console.log('ready to fetch [%s]', query)
    const res = await fetch(`${strapiURL}/api/autoridades?${query}`);
    const result = await res.json()
    const data = result.data as AutoridadStrapi[];
    console.dir(data[0].attributes.persona.data.attributes.profile_image.data)
    //                  attributes.persona.data.attributes
    //                                  autoridad.persona!.data.profile_image.data[0]
    const autoridades:Autoridad[] = data.map(autoridadData => new Autoridad(autoridadData));

    /*
    const res = await axios.get<{ data: AutoridadStrapi[]; meta: any }>(`${strapiURL}/api/autoridades?${query}`);
    const autoridades:Autoridad[] = res.data.data.map(autoridadData => new Autoridad(autoridadData));
    */
    
    return autoridades;
}



// component
export  async function AutoridadesView() {
  const autoridades =  await getAutoridades();

  return (
    <>
      <div className="grid grid-cols-3  gap-4  ">
        <div className="col-span-1"></div>
        {autoridades.map((autoridad, index) => (
          (0 === index) ? (
            <AutoridadView key={index} 
                id = {autoridad.id}
                firstname={autoridad.persona!.data.firstname}
                imagen={autoridad.listview ? autoridad.persona!.data.profile_image.data[0].attributes.url : 'no-img'}
                lastname={autoridad.persona!.data.lastname}
                position_name={autoridad.cargo!.data.position_name}
                listview = {autoridad.listview}
  
            />
          ) : null
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {autoridades.map((autoridad, index) => (
          (0 !== index) ? (
            <AutoridadView 
              key={`autoridad-${index}`}
              id={autoridad.id}
              imagen={autoridad.listview ? autoridad.persona!.data.profile_image.data[0].attributes.url : 'no-img'}
              firstname={autoridad.persona!.data.firstname}
              lastname={autoridad.persona!.data.lastname}
              position_name={autoridad.cargo!.data.position_name}
              listview={autoridad.listview}
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
                key={index}
                id={autoridad.id}
                
                firstname={autoridad.persona!.data.firstname}
                lastname={autoridad.persona!.data.lastname}
                position_name={autoridad.cargo!.data.position_name}
                listview={autoridad.listview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
  
}


interface AutoridadListProps {
    id: number;
    
    firstname?: string;
    lastname?: string;
    position_name?: string;
    listview?: boolean;
  }
  
export const AutoridadList = ({ id, firstname="pedro", lastname='jorge', position_name='jefe', listview=true }: AutoridadListProps) => {
    return (
      
        ( listview 
          ?   null
        : <div key={id} className="text-center mt-1 font-sans">
            
              <div className="text-black mb-2">{position_name}</div>
              <div className="text-customTeal font-bold">{firstname}, {lastname}</div>
              <div className="text-gray-800 font-sans encode-sans text-center"></div>
              {/* <button className="p-2 btn btn-outline btn-info font-bold justify-botton absolute bottom-0 left-0 text-customTeal">
                {autoridades.contacto}
              </button> */}
            </div>
          
        )
    );
  };
  
  
  interface AutoridadProps {
    id: number;
    imagen: string;
    firstname: string;
    lastname: string;
    position_name: string;
    listview: boolean;
  }
  
  export const AutoridadView = ( { id, imagen, firstname, lastname, position_name, listview }: AutoridadProps ) => {
    const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
      return `${src}?&q=${quality || 75}`;
    };
  

    return (      
        ( listview
          ?   <div key={id} className="relative rounded-lg  p-2">
                <div className="relative rounded-lg w-241 h-96 md:w-541 md:h-96"> 
                    <Image  
                            fill={true} 
                            style={{ objectFit: "cover" }}
                            className='rounded-t-lg md:w-9 w-9'
                            src={strapiURL + imagen} 
                            alt={firstname} />
                </div> 
                <div className="rounded-b-lg flex items-center   p-8   bg-customi1 shadow-inner">
                  <div className="md:w-2/10 w-full text-md font-bold   text-left ">{firstname}, {lastname}</div>
                  <div className="md:w-8/10 w-full text-sm justify-right">{position_name}</div>
                </div>
              
              </div>
        :null
        )
    );
  };
  
  export const AutoridadMock = ({id, listview, firstname, lastname, position_name, imagen}: {id: number;listview: boolean; firstname: string; lastname: string; position_name: string; imagen: string;}) => {
    return (
      <>
      <h1>Hola mundo: {id} {firstname}</h1>
      <h1>imagen: {imagen}</h1>
      <h1>lastname: {lastname}</h1>
      <h1>position: {position_name}</h1>
      <h1>listview: {listview? 'verdadero': 'false'}</h1>
      </>
      
    );
  };
