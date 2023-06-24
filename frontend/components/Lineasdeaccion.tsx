import Image from 'next/image';

export default function Lineasdeaccion() {
  return (
    <div className="flex items-center bg-white ml-1 justify-center p-4 mb-4">
      <div className="w-3/5 flex-shrink-0 ml-4 bg-white">
        <div className="text-center  ">
          <h2 className="text-4xl  font-sans font-bold mb-2">Lineas de Accion</h2>
          <p className="text-white font-sans encode-sans">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque poro quisquam est, qui dolorem.</p>
        </div>
        <div className="flex justify-center ml-1 bg-white">
          <Image src="/lineasdeaccion.png"  alt="Blank" width={1800} height={503} />
        </div>
      </div>
    </div>
  );
}


