import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AutoridadListProps {
  id: number;
  imagen: string;
  firstname: string;
  lastname: string;
  position_name: string;
  listview: boolean;
}

/* const imageLoader = ({ src, quality }: { src: string; quality?: number }): string => {
  return `http://localhost:1337${src}?&q=${quality || 75}`;
}; */

const AutoridadList: React.FC<AutoridadListProps> = ({ id, imagen, firstname, lastname, position_name, listview }) => {
  return (
    
      ( listview 
        ?   null
      : <div key={id} className="text-center mt-1 font-sans">
          
            <div className="text-black mb-2">{position_name}</div>
            <div className="text-customTeal font-bold">{firstname}, {lastname}</div>
            <div className="text-gray-800 font-sans encode-sans text-center"></div>
            {/* <button className="p-2 btn btn-outline btn-info font-bold justify-botton absolute bottom-0 left-0 text-customTeal">
              {autoridades.contacto}
            </button> */}
          </div>
        
      )
  );
};

export default AutoridadList;
