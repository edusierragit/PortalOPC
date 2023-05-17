import { useEffect, useRef, useState } from "react";



export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false); // Estado que controla el colapso del menú de navegación
  const navigationRef = useRef<HTMLUListElement>(null); // Referencia al elemento de la lista de navegación
  const [isScrolled, setIsScrolled] = useState(false); // Estado que indica si la página ha sido desplazada hacia abajo
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
      navigationRef.current?.classList.add("fixed", "top-0"); // Agrega las clases "fixed" y "top-0"
    } else {
      navigationRef.current?.classList.remove("fixed", "top-0"); // Elimina las clases "fixed" y "top-0"
    }
  }, [isScrolled]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);

  };

  const closeModal = () => {
    setSelectedOption(null);
  };

  const handleDropdownToggle: React.MouseEventHandler<HTMLLIElement> = () => {
    setShowDropdown((prevState) => !prevState);
  };
  return (
    <nav className={`w-full p-4 bg-customTeal dark:bg-customTeal border-b border-gray-300 dark:border-gray-600 flex items-center justify-center font-sans`} >
      <div className="flex items-center justify-between w-full md:w-[110px]" >
        <button
          className="hover:ring-4 md:hidden"
          onClick={() => setCollapse(true)}
        ></button>
      </div>

      <ul
        ref={navigationRef}
        className={`md:flex md:items-center gap-10 bg-customTeal dark:bg-customTeal w-[60%] md:w-auto ${collapse ? "" : "hidden md:block"
          } px-4 py-3 border-r border-gray-300 md:border-0 shadow-lg md:shadow-none transition-all ease-in-out duration-500 font-sans`}
      >
        <div className="relative group">
          <li
            className="hover:bg-customTeal  hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500 cursor-pointer"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <a href="/" className="text-white  py-3 md:py-1 px-3 md:px-2">
              Institucional
            </a>
            {showDropdown && (
              <ul className="absolute top-full left-0 w-48 bg-customTeal p-4">
                <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">

                  <a href="/autoridades" className="text-white py-3 md:py-1 px-3 md:px-2">
                    Autoridades
                  </a>

                </li>
                <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">

                  <a href="/organigrama" className="text-white py-3 md:py-1 px-3 md:px-2">
                    Organigrama
                  </a>

                </li>
                <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">

                  <a href="/lineas-accion" className="text-white py-3 md:py-1 px-3 md:px-2">
                    Líneas de Acción
                  </a>

                </li>
              </ul>
            )}
          </li>
        </div>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="organismos" className="text-white py-3 md:py-1 px-3 md:px-2">
            Organismos
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="proveedores" className="text-white py-3 md:py-1 px-3 md:px-2">
            Proveedores
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="noticias" className="text-white py-3 md:py-1 px-3 md:px-2">
            Noticias y Agenda
          </a>
        </li>
        <li className="hover:bg-customTeal hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
          <a href="capacitacion" className="text-white py-3 md:py-1 px-3 md:px-2">
            Capacitación
          </a>
        </li>
      </ul>
    </nav>
  );

}