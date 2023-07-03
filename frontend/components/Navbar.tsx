import { useEffect, useRef, useState } from "react";
import Link from 'next/link';

export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false); // Estado que controla el colapso del menú de navegación
  const navigationRef = useRef<HTMLUListElement>(null); // Referencia al elemento de la lista de navegación
  const [isScrolled, setIsScrolled] = useState(false); // Estado que indica si la página ha sido desplazada hacia abajo
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Manejador de desplazamiento de la página
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll); // evento para el scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remover escucha de evento de desplazamiento al desmontar el componente
    };
  }, []);

  useEffect(() => {
    // Manejador de cambio de tamaño de ventana
    const handleWindowResize = () => {
      setCollapse(false); // Restablecer el estado del colapso cuando se cambia el tamaño de la ventana
    };

    window.addEventListener("resize", handleWindowResize); // Agregar escucha de evento de cambio de tamaño de ventana

    return () => {
      window.removeEventListener("resize", handleWindowResize); // Remover escucha de evento de cambio de tamaño de ventana al desmontar el componente
    };
  }, []);

  useEffect(() => {
    // Actualiza las clases CSS del elemento de la lista de navegación en función del estado de desplazamiento
    if (isScrolled) {
      navigationRef.current?.classList.add("fixed", "top-0");
    } else {
      navigationRef.current?.classList.remove("fixed", "top-0");
    }
  }, [isScrolled]);



  const handleDropdownToggle: React.MouseEventHandler<HTMLLIElement> = () => {
    setShowDropdown((prevState) => !prevState);
  };
  return (
    <nav ref={navigationRef}
      className={`w-full p-3 bg-customTeal  mr-3 dark:bg-customTeal  transition-all border-gray-300 dark:border-gray-600 flex items-center justify-center  font-sans `} style={{ zIndex: 10 }}>
      <div className="flex items-center justify-between w-full md:w-[110px]" >
        <button
          className="hover:ring-4 md:hidden"
          onClick={() => setCollapse(true)}
        ></button>
      </div>

      <ul
        ref={navigationRef}
        className={`md:flex md:items-center gap-4 mr-10 bg-customTeal dark:bg-customTeal w-[70%] md:w-auto  ${collapse ? "" : "hidden md:block"
          } px-4 py-1 border-r border-gray-300 md:border-0 shadow-lg md:shadow-none transition-all ease-in-out duration-500 font-sans`}
      >
        <div className="relative group">
          <li
            className="hover:bg-customTeal    dark:text-white rounded-lg transition-all ease-in-out duration-500 cursor-pointer"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <Link href="/" className=" hover:text-white hover:font-bold mr-8  py-3  px-3 md:px-1">
              INSTITUCIONAL
            </Link>
            {showDropdown && (
              <ul className="absolute top-full left-0 w-48 bg-customTealtoggle p-4" style={{ zIndex: 10 }}>
                <li className="hover:font-bold hover:text-white dark:text-white rounded-lg transition-all ">

                  <Link href="/autoridades" className="text-white py-3 md:py-1 px-3 md:px-2 ">
                    Autoridades
                  </Link>

                </li>
                <li className="hover:font-bold hover:text-white dark:text-white rounded-lg transition-all ">

                  <Link href="/organigrama" className="text-white  hover:text-white hover:font-bold py-3 md:py-1 px-3 md:px-2">
                    Organigrama
                  </Link>

                </li>
                <li className="hover:font-bold hover:text-white dark:text-white  rounded-lg transition-all  ">

                  <Link href="/Lineas de accion" className="text-white py-3 md:py-1 px-3 md:px-2">
                    Lineas de accion
                  </Link>

                </li>
              </ul>
            )}
          </li>
        </div>
        <li className="hover:bg-customTeal  hover:text-gray-500 dark:text-white mr-9 rounded-lg transition-all ease-in-out ">
          <Link href="organismos" className="text-white hover:font-bold mr-4  py-3 md:py-1 px-3 md:px-2">
            ORGANISMO
          </Link>
        </li>
        <li className="hover:bg-customTeal  hover:text-gray-500 dark:text-white mr-9 rounded-lg transition-all ease-in-out ">
          <Link href="proveedores" className="text-white hover:font-bold mr-4  py-3 md:py-1 px-3 md:px-2">
            PROVEEDORES
          </Link>
        </li>
        <li className="hover:bg-customTeal  hover:text-gray-500 dark:text-white mr-9 rounded-lg transition-all ease-in-out  ">
          <Link href="noticiaslanding" className="text-white hover:font-bold mr-4  py-3 md:py-1 px-3 md:px-2">
            NOTICIAS Y AGENDA
          </Link>
        </li>
        <li className="hover:bg-customTeal  hover:text-gray-500 dark:text-white mr-9 rounded-lg transition-all ease-in-out ">
          <Link href="capacitacion" className="text-white hover:font-bold mr-4 py-3 md:py-1 px-3 md:px-1">
            CAPACITACION
          </Link>
        </li>
      </ul>
    </nav>
  );

}