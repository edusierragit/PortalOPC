import Image from 'next/image';

export default function Blankcard() {
  return (
    <div className="flex items-center border font-Roboto bg-white  border-gray-300 rounded p-4 mb-4">
      <div className="w-1/4 flex-shrink-0 ml-1">
        <Image src="/Hospital Central de Alta Complejidad de Pilar.png" alt="Blank" width={1800} height={503} />
      </div>
      <div className='text-2xl text-gray-800 font-Roboto mb-4'>
      <h2 className="text-2xl font-bold font-sans-serif mb-2">SE INAUGURÓ EL HOSPITAL CENTRAL DE ALTA COMPLEJIDAD DE PILAR</h2>
        <p className="text-gray-800 font-sans">“Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad"</p>
      </div>
        <div className="w-3/4">
        
      </div>
    </div>
  );
}

