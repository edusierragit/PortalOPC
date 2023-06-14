import React from 'react';

const Searchbar = () => {
  return (
    <div className=" justify-start h-158  ml-200 w-3/4 mx-auto bg-gray-400 flex items-center">
      <span className="text-white ml-10 text-lg font-bold pl-10" style={{ fontSize: "40px" }}>¿Qué estás buscando?</span>
      <input
        type="text"
        className="ml-7 px-9 py-3 rounded-md bg-white"
        placeholder="QUIEREN QUE SE VEA EL BUSCADOR?"
      />
    </div>
  );
};

export default Searchbar;
