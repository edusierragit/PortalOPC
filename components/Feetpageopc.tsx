import Image from 'next/image';

export default function Feetpageopc() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/5 flex-shrink-0 ml-4">
        <div className="flex justify-center">
          <Image src="/feetpageopc.png" alt="Blank" width={1800} height={503} className="border-none" />
        </div>
      </div>
    </div>
  );
}
