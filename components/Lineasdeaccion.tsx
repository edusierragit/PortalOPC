import Image from 'next/image';

export default function Lineasdeaccion() {
  return (
    <div className="flex items-center justify-center p-4 mb-4">
      <div className="w-3/5 flex-shrink-0 ml-4">
        <div className="text-center">
          <h2 className="text-4xl font-sans font-bold mb-2">Lineas de Accion</h2>
          <p className="text-gray-800 font-sans encode-sans">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque poro quisquam est, qui dolorem.</p>
        </div>
        <div className="flex justify-center">
          <Image src="/lineasdeaccion.png" alt="Blank" width={1800} height={503} />
        </div>
      </div>
    </div>
  );
}
