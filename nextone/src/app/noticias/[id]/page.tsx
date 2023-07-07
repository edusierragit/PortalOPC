
import {NoticiaView}  from '@/components/noticias/noticias';


export default function Noticia({ params }: { params: { id: number } }) {
  const { id } = params;

    return <div> <NoticiaView
     id= {id}
     /></div>
  }