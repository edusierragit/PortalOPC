export interface Persona {
    firstname: string;
    lastname: string;
    biography?: string;
    bitrh?:Date;
    email: string;
    profile_image: any;
  }
  
  export interface Cargo {
  position_name: string;
  }
  
  
  export class Autoridad {
    id: number = 0;
    listview: boolean = false;

    persona?: {
      id: number;
      data:Persona;
    }

    cargo?: {  
      id: number;
      data:Cargo;
    }
    constructor(au?: AutoridadStrapi){
      if(au){
        this.id = au.attributes.persona.data.id;
        this.listview = au.attributes.listview;
        this.persona = {
          id: au.attributes.persona.data.id,
          data: au.attributes.persona.data.attributes
        }
        this.cargo = {
          id: au.attributes.cargo.data.id,
          data: au.attributes.cargo.data.attributes
        }
      };
    }
  }

  export interface AutoridadStrapi {
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
      cargo: 
      {
        data: {
          id: number;
          attributes:Cargo;
          
        }
      }
    }
  } 

  /**
   * 
   * 

        <h1>aca estoy!!!!!!!!!!!!!!</h1>
      {autoridades.map((autoridad, index) => (
            <p key={index}>{autoridad.persona!.data.firstname}</p>

        ))
        }

        {autoridades.map((autoridad, index) => (
            <p key={index}>{autoridad.persona!.data.firstname}</p>
        ))}

        <p className="text-gray-800 font-sans encode-sans text-center"></p><button className="p-2 btn btn-outline btn-info font-bold justify-botton absolute bottom-0 left-0 text-customTeal">
          {autoridades.contacto}
        </button> 
 

      <div className="grid grid-cols-3  gap-4  ">
        <div className="col-span-1"></div>
        {autoridades.map((autoridad, index) => (
          (0 === index) ? (
            <AutoridadView
              key={`autoridad-first-${index}`}
              id={autoridad.id}
              imagen={autoridad.listview ? autoridad.persona?.data.profile_image.data[0]?.url : 'no-img'}
              firstname={autoridad.persona!.data.firstname}
              lastname={autoridad.persona!.data.lastname}
              position_name={autoridad.cargo!.data.position_name}
              listview={autoridad.listview}
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
              imagen={autoridad.listview ? autoridad.persona!.data.profile_image.data[0]?.attributes.url : 'no-img'}
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
            {autoridades.map((autoridad) => (
              <AutoridadList 
                key={autoridad.id}
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


   */
  
  
  
  