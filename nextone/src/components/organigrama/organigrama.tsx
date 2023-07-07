import React from 'react';
import Image from 'next/image';

const OrganigramaView =  () => {
  return (
    <>
      <div className="flex items-center justify-center h-1000">
        <Image 
        src="/Organigrama.jpg" 
        className="w-1/2 " 
        alt="Organigrama"
        fill={true}
        style={{objectFit: "cover"}}
        />
      </div>
    </>
  );
};

export default OrganigramaView;