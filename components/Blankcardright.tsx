import Image from 'next/image';

export default function Blankcardright() {
  return (
    <div className="flex items-center border border-gray-300  w-full p-4 mb-4">
      <div className="w-full">
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mb-2">Destacado</h2>
        <p className="text-gray-800 font-sans encode-sans">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque poro quisquam est, qui dolorem.</p>
      </div>
      <div className="h-50 bg-gray-200"></div>
      <div className="w-2/4  flex-shrink-0 ml-4">
        <Image src="/blankcard.png" alt="Blank" width={1800} height={503} />
      </div>
    </div>
  );
}
