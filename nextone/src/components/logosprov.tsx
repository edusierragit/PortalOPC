import Image from 'next/image';

export default function LogosprovView() {
  return (
    <div className="flex items-center  border-white  justify-center w-full bg-white">
      <Image src="/opcspbalogo.png" alt="Imagen OPC" width={650} height={83} />
    </div>
  );
}