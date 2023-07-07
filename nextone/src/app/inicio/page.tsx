//import Image from 'next/image'
import DestaquePrincipal from '@/components/home/destaqueprincipal';
import DestacadoView from '@/components/home/destaquenoticias';

export default function Inicio() {

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
  );
}