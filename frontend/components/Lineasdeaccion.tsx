import Image from 'next/image';
import React from 'react';
import classNames from 'classnames';

const colors = ['bg-customi1', 'bg-customi2', 'bg-customi3', 'bg-customi4', 'bg-customi5', 'bg-customi6'];
const icons = ['/icono1.png', '/icono2.png', '/icono3.png', '/icono4.png', '/icono5.png', '/icono6.png'];

export default function Lineasdeaccion() {
  const firstRowIcons = icons.slice(0, 3);
  const secondRowIcons = icons.slice(3, 6);

  const handleClick = (index:any) => {
    // Lógica a ejecutar cuando se hace clic en un icono
    console.log(`Icono ${index + 1} clickeado`);
  };

  return (
    <div className="flex justify-center mt-4 flex-wrap space-y-4">
      <div className="flex  flex-col">
        <div className="flex justify-center space-x-4">
          {firstRowIcons.map((icon, index) => (
            <button
              key={index}
              className={classNames('w-52 h-44 flex items-center justify-center rounded-lg', colors[index])}
              style={{ marginBottom: '1rem' }} // Espaciado vertical en la primera fila
              onClick={() => handleClick(index)}
            >
              <Image src={icon} alt={`Icon ${index + 1}`} width={70} height={16} />
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {secondRowIcons.map((icon, index) => (
            <button
              key={index}
              className={classNames('w-52 h-44 flex items-center justify-center rounded-lg', colors[index + 3])}
              onClick={() => handleClick(index + 3)}
            >
              <Image src={icon} alt={`Icon ${index + 4}`} width={70} height={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}




// return (
//   <div className="flex justify-center ml-9">
//     <ul className="menu flex font-bold items-center mr-9 lg:menu-horizontal">
      
//       <li className="flex-grow px-9 w-customfoot py-1 mr-4 bg-customTeal">
//         <a href="https://pbac.cgp.gba.gov.ar" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
//           PBAC
//         </a>
//       </li>
//       <li className="flex-grow px-9 w-customfoot py-1 mr-4 bg-customTeal">
//         <a href="https://opc.gba.gob.ar/tcontrol" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
//           Tablero de control
//         </a>
//       </li>
//       <li className="flex-grow px-9 w-customfoot py-1 bg-customTeal">
//         <a href="https://opc.gba.gob.ar/soporte/" target="_blank" rel="noopener noreferrer" className="text-white m-auto">
//           Centro de ayuda
//         </a>
//       </li>
//     </ul>
//   </div>
// );
// }

