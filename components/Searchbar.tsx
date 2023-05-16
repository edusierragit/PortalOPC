import React from 'react';

const Searchbar = () => {
  return (
    <div className="absolute w-1680 h-158 left-120 top-1097 bg-gray-400 flex items-center justify-center">
      <span className="text-white">¿Qué estás buscando?</span>
      <input
        type="text"
        className="ml-4 px-4 py-2 rounded-md bg-white"
        placeholder="Ingresa tu búsqueda"
      />
    </div>
  );
};

export default Searchbar;