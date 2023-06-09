import Image from 'next/image';

export default function Blankcardright() {
  return (
    <div className="flex ml-1 border font-sans bg-white border-gray-300 w-full  p-4 mb-4">
      <div className="w-full "></div>
      <div className="">
        <h2 className="text-2xl font-bold font-mono mb-2">Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad</h2>
        <p className="text-gray-800 font-ui-sans-serif mb-4">El gobernador de la Provincia de Buenos Aires, Axel Kicillof, participó del acto de inauguración del nuevo nosocomio para los y las pilarenses.</p>
        <p className="text-gray-800 font-ui-sans-serif mb-4">El intendente de Pilar, Federico Achaval, detalló las nuevas obras y manifestó: "Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad".</p>
      </div>
      <div className="h-50 bg-gray-200"></div>
      <div className="w-1/4 flex-shrink-0 ml-4">
        <Image src="/rdnbahiablanca.png" alt="Blank" width={1800} height={503} />
      </div>
    </div>
  );
}
