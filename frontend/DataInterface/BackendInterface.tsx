import { Persona, Cargo } from '@/DataInterface/DataInterface';

// Todas las intereaces que sean requeridas para recibir la información desde el backend

export interface NoticiaStrapi {
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
    publishedAt: string;
    titulo_destaque: string;
    updatedAt: string;
    imagen_principal: {
      data: Array<{
        id:string;
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



export interface AutoridadesStrapi {
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
