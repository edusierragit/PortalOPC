import Image from 'next/image'

import Link from 'next/link'
import DestaquePrincipal from '@/components/home/destaqueprincipal';
import DestacadoView from '@/components/home/destaquenoticias';

export default function Home() {
  return (
    <main className="bg-white">
      <div className="mx-auto px-2">
        <DestaquePrincipal />
     

        <div className="container  mx-auto mt-10">
          <div className="flex  justify-center">
            <div className="w-custom">
              <DestacadoView/>
            </div>
          </div>
          <div className="mx-auto  ">
          </div>
        </div>
      </div>
    </main>
  )
}
