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
  return `http://localhost:1337${src}?&q=${quality || 75}`;
};

const Autoridad: React.FC<AutoridadProps> = ({ id, imagen, firstname, lastname, position_name, listview }) => {
  return (
    
      ( listview
        ?   <div key={id} className="relative border border-gray-300 rounded p-2">
             <div className="mb-2 relative w-241 h-96 md:w-541 md:h-96"> 
             <Image loader={imageLoader} fill={true} style={{ objectFit: "cover" }} 
             src={imagen} 
             alt={firstname} 
             /></div> 
              <div className="absolute p-3 inset-0  justify-left items-left ">
                <h2 className="text-lg font-bold mb-2  text-left ">{firstname}, {lastname}</h2>
                <h3 className="text-normal  mb-2 text-left">{position_name}</h3>
                <p className="text-gray-800 font-sans encode-sans text-center"></p>
                {/* <button className="p-2 btn btn-outline btn-info font-bold justify-botton absolute bottom-0 left-0 text-customTeal">
                  {autoridades.contacto}
                </button> */}
              </div>
            
            </div>
      :null
      )
  );
};

export default Autoridad;
