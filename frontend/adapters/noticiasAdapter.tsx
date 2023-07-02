
import { parseISO, format } from 'date-fns';
import { NoticiaInterface } from '@/DataInterface/DataInterface';
import { NoticiaStrapi } from '@/DataInterface/BackendInterface';


export function convertirNoticia(noticia: NoticiaStrapi): NoticiaInterface {
  // Realiza la conversión de los campos según sea necesario
  const convertedNoticia: NoticiaInterface = {
    id: noticia.id,
    attributes: {
      id: noticia.attributes.id,
      volanta: noticia.attributes.volanta,
      acceso_publico_registrados_funcionarios: noticia.attributes.acceso_publico_registrados_funcionarios,
      bajada: noticia.attributes.bajada,
      copete: noticia.attributes.copete,
      createdAt: noticia.attributes.createdAt,
      date_stop_publish: noticia.attributes.date_stop_publish,
      date_to_publish: noticia.attributes.date_to_publish,
      desarrollo: noticia.attributes.desarrollo,
      short_description: noticia.attributes.short_description,
      link_contenido: noticia.attributes.link_contenido,
      publishedAt: parseISO(noticia.attributes.publishedAt),
      titulo_destaque: noticia.attributes.titulo_destaque,
      updatedAt: noticia.attributes.updatedAt,
      imagen_principal: {...noticia.attributes.imagen_principal},
    },
  };

  return convertedNoticia;
}
