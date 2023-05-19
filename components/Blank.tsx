import Image from 'next/image';

export default function Blank() {
  return (
    
      <div className="w-90% h-50 bg-gray-200">
      <div className="flex items-center justify-center w-90% bg-white">
        <Image src="/blank.png" alt="Imagen OPC" width={1800} height={503} />
      </div>
    </div>
      
  );
}
