import { parseISO } from 'date-fns';
//export
export interface Image {
        
    id:string;
    attributes: {
        alternativeText:  null;
        caption: string;
        createdAt: string;
        ext: string;
        formats: any ;
        hash: string;
        height: number;
        mime: string;
        name: string;
        previewUrl: string ;
        provider: string;
        provider_metadata: any ;
        size: number;
        updatedAt: string;
        url: string;
        width: number;
    }
}

// Interface para las noticias
export class Noticia {
    id: number = 0;
    volanta?: string;
    acceso_publico_registrados_funcionarios?:string;
    bajada?: string;
    copete?: string;
    createdAt: Date = new Date();
    date_stop_publish?: Date;
    date_to_publish: Date = new Date();
    desarrollo?: string;
    short_description?: string;
    link_contenido?: string;
    publishedAt: Date = new Date();
    titulo_destaque?: string;
    updatedAt: Date = new Date();
    imagen_principal: Array<Image>=[];

    //constructor que ademas sirve como adaptador de lo que viene del backend
    constructor(noticia?: NoticiaStrapi){
        if(noticia){
          this.id= noticia.id;
          this.volanta= noticia.attributes.volanta;
          this.acceso_publico_registrados_funcionarios= noticia.attributes.acceso_publico_registrados_funcionarios;
          this.bajada= noticia.attributes.bajada,
          this.copete= noticia.attributes.copete;
          this.createdAt= parseISO(noticia.attributes.createdAt);
          this.date_stop_publish= parseISO(noticia.attributes.date_stop_publish);
          this.date_to_publish= parseISO(noticia.attributes.date_to_publish);
          this.desarrollo= noticia.attributes.desarrollo;
          this.short_description= noticia.attributes.short_description;
          this.link_contenido= noticia.attributes.link_contenido;
          this.publishedAt= noticia.attributes.publishedAt?parseISO(noticia.attributes.publishedAt):parseISO(noticia.attributes.createdAt);
          this.titulo_destaque= noticia.attributes.titulo_destaque;
          this.updatedAt= parseISO(noticia.attributes.updatedAt);
          this.imagen_principal= noticia.attributes.imagen_principal.data;
        };
      }
    

  }

        
// Modelo del backend

// Todas las intereaces que sean requeridas para recibir la información desde el backend

export interface NoticiaStrapi {
    id: number;
    attributes: {
      id: number;
      volanta: string;
      acceso_publico_registrados_funcionarios:string;
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
            alternativeText:  null;
            caption: string;
            createdAt: string;
            ext: string;
            formats: any ;
            hash: string;
            height: number;
            mime: string;
            name: string;
            previewUrl: string ;
            provider: string;
            provider_metadata: any ;
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
  id: number;
  imagen: string;
  epigrafe?: string;
  titular?: string;
  bajada?: string;
  parrafo?: string;
  publishedAt: Date ;
}