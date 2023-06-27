import React from 'react';

export default function Footerpageopc() {
  return (
    <div className="flex justify-center ml-9">
      <ul className="menu flex font-bold items-center mr-9 lg:menu-horizontal">
        
        <li className="flex-grow px-9 w-customfoot py-1 mr-4 bg-customTeal">
          <a href="https://pbac.cgp.gba.gov.ar" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
            PBAC
          </a>
        </li>
        <li className="flex-grow px-9 w-customfoot py-1 mr-4 bg-customTeal">
          <a href="https://opc.gba.gob.ar/tcontrol" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
            Tablero de control
          </a>
        </li>
        <li className="flex-grow px-9 w-customfoot py-1 bg-customTeal">
          <a href="https://opc.gba.gob.ar/soporte/" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
            Centro de ayuda
          </a>
        </li>
      </ul>
    </div>
  );
}


