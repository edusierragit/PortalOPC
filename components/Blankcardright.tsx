import Image from 'next/image';

export default function Blankcardright() {
  return (
    <div className="flex items-center border border-gray-300 rounded p-4 mb-4">
      <div className="w-3/4">
        <p className="text-gray-800 font-sans ">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque poro quisquam est, qui dolorem.</p>

      </div>
      <div className="w-2/4"/>
      <div className="w-1/4 flex-shrink-0 ml-4">
        <Image src="/blank.png" alt="Blank" width={1800} height={503} />
      </div>
    </div>
  );
}