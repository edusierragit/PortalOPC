import React from 'react';

const Searchbar = () => {
  return (
    <div className="absolute w-1680 h-158 left-120 top-1097 bg-gray-400 flex items-center">
      <span className="text-white text-lg font-bold pl-10" style={{ fontSize: "40px" }}>¿Qué estás buscando?</span>
      <input
        type="text"
        className="ml-8 px-8 py-2 rounded-md bg-white"
        placeholder="Ingresa tu búsqueda"
      />
    </div>
  );
};

export default Searchbar;
