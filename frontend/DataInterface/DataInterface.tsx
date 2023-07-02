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



/**
 * Mosckup Para los use state
 */ 

export const mockNoticia: NoticiaInterface = {
  id: '1',
  attributes: {
    id: '1',
    acceso_publico_registrados_funcionarios: null,
    volanta: 'Mock Bajada',
    bajada: 'Mock Bajada',
    copete: 'Mock Copete',
    createdAt: '2023-06-01T12:00:00.000Z',
    date_stop_publish: '2023-06-30T12:00:00.000Z',
    date_to_publish: '2023-06-01T12:00:00.000Z',
    desarrollo: 'Mock Desarrollo',
    short_description: 'Mock Descripción breve',
    link_contenido: 'https://www.example.com/noticia/1',
    publishedAt: new Date('2023-06-01T12:00:00.000Z'),
    titulo_destaque: 'Mock Título',
    updatedAt: '2023-06-01T12:00:00.000Z',
    imagen_principal: {
      data: [
        {
          id: '1',
          attributes: {
            alternativeText: 'Mock Alternative Text',
            caption: 'Mock Caption',
            createdAt: '2023-06-01T12:00:00.000Z',
            ext: 'jpg',
            formats: null,
            hash: 'mock-hash',
            height: 800,
            mime: 'image/jpeg',
            name: 'mock-image',
            previewUrl: null,
            provider: 'mock-provider',
            provider_metadata: null,
            size: 1024,
            updatedAt: '2023-06-01T12:00:00.000Z',
            url: 'https://www.example.com/images/mock-image.jpg',
            width: 1200,
          },
        },
      ],
    },
  },
};