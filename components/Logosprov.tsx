import Image from 'next/image';

export default function Logosprov() {
  return (
    <div className="flex items-center justify-center w-full bg-white">
      <Image src="/opcspbalogo.png" alt="Imagen OPC" width={450} height={83} />
    </div>
  );
}