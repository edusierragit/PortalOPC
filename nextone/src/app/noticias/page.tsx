//import Image from 'next/image'
import NoticiasView  from '@/components/noticias/noticias';

export default function Noticias() {

  return (
    <main className="bg-white">
      <div className="mx-auto px-2">
        <NoticiasView/>
      </div>
    </main>
  )
}