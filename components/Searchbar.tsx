import React from 'react';

const Searchbar = () => {
  return (
    <div className="relative justify-start  h-158  w-full bg-gray-400 flex items-center">
      <span className="text-white ml-20 text-lg font-bold pl-10" style={{ fontSize: "40px" }}>¿Qué estás buscando?</span>
      <input
        type="text"
        className="ml-7 px-8 py-3 rounded-md bg-white"
        placeholder="Ingresa tu búsqueda"
      />
    </div>
  );
};

export default Searchbar;
