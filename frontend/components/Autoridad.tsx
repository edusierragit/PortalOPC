import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AutoridadProps {
  id: number;
  imagen: string;
  firstname: string;
  lastname: string;
  position_name: string;
  listview: boolean;
}

const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
  return `${src}?&q=${quality || 75}`;
};

const Autoridad: React.FC<AutoridadProps> = ({ id, imagen, firstname, lastname, position_name, listview }) => {
  return (
    
      ( listview
        ?   <div key={id} className="relative rounded-lg  p-2">
             <div className="relative rounded-lg w-241 h-96 md:w-541 md:h-96"> 
             <Image loader={imageLoader} fill={true} style={{ objectFit: "cover" }}  className='rounded-t-lg md:w-9 w-9'
             src={imagen} 
             alt={firstname} 
             /></div> 
                <div className="rounded-b-lg flex items-center   p-8   bg-customi1 shadow-inner">
                <div className="md:w-2/10 w-full text-md font-bold   text-left ">{firstname}, {lastname}</div>
                <div className="md:w-8/10 w-full text-sm justify-right">{position_name}</div>
                
                {/* 
                <p className="text-gray-800 font-sans encode-sans text-center"></p><button className="p-2 btn btn-outline btn-info font-bold justify-botton absolute bottom-0 left-0 text-customTeal">
                  {autoridades.contacto}
                </button> */}
              </div>
            
            </div>
      :null
      )
  );
};

export default Autoridad;
