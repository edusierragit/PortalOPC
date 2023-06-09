import Image from 'next/image';

export default function Footerpageopc() {
  return (
    <div className="flex items-center bg-white border-white justify-center">
      <div className="w-3/5  ml-5">
        <div className="flex justify-center">
          <Image src="/footerpageopc.png" alt="Blank" width={1800} height={503} className="border-none" />
        </div>
      </div>
    </div>
  );
}
