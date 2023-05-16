import { useEffect, useRef, useState } from "react";
import Searchbar from './Searchbar'

export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false); // Estado para controlar si el menú está colapsado o no

 const navigationRef = useRef<HTMLUListElement>(null); // Referencia al elemento de navegación

useEffect(() => {
  // Efecto para detectar clics fuera del menú y colapsarlo
  document.addEventListener(
    "click",
    (e: Event) => {
      if (typeof navigationRef !== null) {
        if (!navigationRef.current?.contains(e.target as Element)) {
          // Si el clic se realiza fuera del menú, colapsarlo
          setCollapse(false);
        } else {
          // Si el clic se realiza dentro del menú, expandirlo
          setCollapse(true);
        }
      }
    },
    true
  );
});

  return (
 <nav className="w-full p-4 bg-customTeal dark:bg-customTeal border-b border-gray-300 dark:border-gray-600 flex items-center justify-center sticky top-0 z-10 font-sans">
  <div className="flex items-center justify-between w-full md:w-[110px]">
    {/* Contenido de la barra */}
        <button
          className="hover:ring-4 md:hidden"
          onClick={() => setCollapse(true)}
        ></button>
      </div>
      <Searchbar />
      <ul
        ref={navigationRef}
        className={`md:flex md:items-center gap-10 bg-customTeal dark:bg-customTeal w-[60%] md:w-auto ${
          collapse ? "" : "hidden md:block"
        } px-4 py-3 border-r border-gray-300 md:border-0 shadow-lg md:shadow-none transition-all ease-in-out duration-500 font-sans`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-end md:hidden">
          <button
            className="hover:ring-2 w-6 h-6 rounded-full"
            onClick={() => setCollapse(false)}
          >X</button>
        </div>
        {/* Close Button */}
  
        <li className="hover:bg-customTeal  hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="#" className="text-white py-3 md:py-1 px-3 md:px-2">
            Institucional
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="#" className="text-white py-3 md:py-1 px-3 md:px-2">
            Organismos
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="#" className="text-white py-3 md:py-1 px-3 md:px-2">
            Proveedores
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="noticias" className="text-white py-3 md:py-1 px-3 md:px-2">
            Noticias y Agenda
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="#" className="text-white py-3 md:py-1 px-3 md:px-2">
            Capacitacion
          </a>
        </li>
      </ul>
        
    </nav>
    
  );
      }  

