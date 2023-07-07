export interface LineaDeAccion {
    id: number;
    attributes: {
      LinkContenido: null | string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      Nombre: string;
      Orden: number;
      iconos: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  }