export interface Destacado {
    id: number;
    attributes: {
      Orden: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Destacado: {
        data: {
          id: number;
          attributes: {
            imagen_principal: any;
            titulo_destaque: string;
            copete: string;
            bajada: string;
            date_to_publish: string | null;
            date_stop_publish: string | null;
            link_contenido: string;
            acceso_publico_registrados_funcionarios: string | null;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            desarrollo: string;
            short_description: string;
          };
        };
      };
    };
  }
