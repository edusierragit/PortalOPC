import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false);

  const navigationRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener(
      "click",
      (e: Event) => {
        if (typeof navigationRef !== null) {
          if (!navigationRef.current?.contains(e.target as Element)) {
            setCollapse(false);
          } else {
            setCollapse(true);
          }
        }
      },
      true
    );
  });

  return (
    <>
      <nav className="w-full p-4 bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-600 flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-[250px]">
          <span>My Navbar</span>
          <button
            className="hover:ring-4 md:hidden"
            onClick={() => setCollapse(true)}
          >
            <FontAwesomeIcon icon={faBars} className="dark:text-white" />
          </button>
        </div>

        <ul
          ref={navigationRef}
          className={`md:flex md:items-center gap-2 absolute md:static bg-white dark:bg-gray-900 w-[60%] h-full md:w-auto left-0 top-[57px] ${
            collapse ? "" : "ms-[-60%]"
          } px-4 py-3 border-r border-gray-300 md:border-0 shadow-lg md:shadow-none transition-all ease-in-out duration-500`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-end md:hidden">
            <button
              className="hover:ring-2 w-6 h-6 rounded-full"
              onClick={() => setCollapse(false)}
            >
              <FontAwesomeIcon icon={faX} className="dark:text-white" />
            </button>
          </div>
          {/* Close Button */}

          <li className="hover:bg-gray-600 my-1 md:my-0 py-3 md:py-1 px-3 md:px-2 hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-gray-600 my-1 md:my-0 py-3 md:py-1 px-3 md:px-2 hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
            <a href="#">About</a>
          </li>
          <li className="hover:bg-gray-600 my-1 md:my-0 py-3 md:py-1 px-3 md:px-2 hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
            <a href="#">Service</a>
          </li>
          <li className="hover:bg-gray-600 my-1 md:my-0 py-3 md:py-1 px-3 md:px-2 hover:text-white dark:text-white rounded-lg transition-all ease-in-out duration-500">
            <a href="#">Blogs</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
