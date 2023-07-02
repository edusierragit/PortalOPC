// Interface para las noticias
export interface NoticiaInterface {
  id: string;
  attributes: {
    id: string;
    volanta: string;
    acceso_publico_registrados_funcionarios: null | string;
    bajada: string;
    copete: string;
    createdAt: string;
    date_stop_publish: string;
    date_to_publish: string;
    desarrollo: string;
    short_description: string;
    link_contenido: string;
    publishedAt: Date;
    titulo_destaque: string;
    updatedAt: string;
    imagen_principal: {
      data: Array<{
        id: string;
        attributes: {
          alternativeText: string | null;
          caption: string | null;
          createdAt: string;
          ext: string;
          formats: any | null;
          hash: string;
          height: number;
          mime: string;
          name: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: any | null;
          size: number;
          updatedAt: string;
          url: string;
          width: number;

        };
      }>;
    };
  };
}

// interface para las props de las noticias, para el componente Noticia
export interface NoticiaProps {
  id: string;
  imagen: string;
  epigrafe: string;
  titular: string;
  bajada: string;
  parrafo: string;
  publishedAt: Date | 0;
}


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


export interface Autoridades {
  id: number;
  attributes: {
    listview: boolean;
    persona: 
    {
      id: number;
      persona:Persona;
      
    }
    cargo: 
    {  
      id: number;
      cargo:Cargo;
    }
  }
}