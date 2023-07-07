//import Image from 'next/image'
import  OrganigramaView  from '@/components/organigrama/organigrama';

export default function Organigrama() {

  return (
    <main className="bg-white">
      <div className="mx-auto px-2">
        <OrganigramaView/>
      </div>
    </main>
  )
}