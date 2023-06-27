import Link from "next/link";
import Image from 'next/image';

export default function ErrorPage() {
  return (
    <div className="bg-customTeal dark:bg-white relative w-screen h-screen transition-colors ease-in-out delay-100">
       <div className="flex  justify-center  border-white  ml-10">
      <Image src="/404.png" alt="Imagen OPC" width={1630} height={60} />
    </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-9 flex items-center justify-between gap-5 w-4/6 md:w-6/12 lg:w-2/6 transition-colors ease-in-out delay-100">
   
        <span className="dark:text-white text-5xl font-extrabold transition-colors ease-in-out delay-100">
          404
        </span>
        
        <div className="border border-gray-900 h-10 dark:border-white transition-colors ease-in-out delay-100"></div>
     
        <div className="dark:text-white transition-colors ease-in-out delay-100 flex flex-col">
          <span className="text-customTeal">Algo no esta funcionando, despedir al programador </span>
          <Link href="/" className="text-customTeal font-bold">
            Volver...
          </Link>
        </div>
      </div>
    </div>
  );
}
