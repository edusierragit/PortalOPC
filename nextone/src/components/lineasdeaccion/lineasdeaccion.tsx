'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import userSWR from 'swr';
import {LineaDeAccion} from './lineadeaccion.model';

const strapiURL = 'http://127.0.0.1:1337';


const fetcher = async (url: string): Promise<LineaDeAccion[] | void> => {
  return await axios
    .get<{ data: LineaDeAccion[]; meta: any }>(url)
    .then(res => {
      //console.dir(res.data);
      return res.data.data;
    })
    .catch(error => {
      if (error.response.status !== 400) throw error
    })
}

function useLineasDeAccion() {
  const { data, error, isLoading } = userSWR(`${strapiURL}/api/lineasdeacciones?populate=*`, fetcher);

  console.log('UseDestacados data: ------------>')
  console.dir(data);
  return {
    lineasdeaccion: data,
    isLoading,
    isError: error
  }

}


const Lineasdeaccion  = () => {
  const { lineasdeaccion, isLoading, isError } = useLineasDeAccion();
  const colors = ['bg-customi1', 'bg-customi2', 'bg-customi3', 'bg-customi4', 'bg-customi5', 'bg-customi6'];
  
  if(!lineasdeaccion) return (<div>Cargando...</div>);

  const handleClick = (index: number) => {
    // Lógica a ejecutar cuando se hace clic en un icono
    console.log(`Icono ${index + 1} clickeado`);
  };

  // Ordenar las lineasDeAccion según el atributo "Orden"
  const sortedLineasDeAccion = lineasdeaccion.sort((a, b) => a.attributes.Orden - b.attributes.Orden);

  return (
    <div className="flex justify-center ml-24 mt-4 flex-wrap space-y-4">
      <div className="flex flex-col">
        <div className="flex justify-center space-x-4">
          {sortedLineasDeAccion.slice(0, 3).map((icon, index) => (
            <button
              key={icon.id}
              className={classNames('w-56 h-52 flex items-center justify-center rounded-lg', colors[index])}
              style={{ marginBottom: '1rem' }} // Espaciado vertical en la primera fila
              onClick={() => handleClick(index)}
            >
              <div className="relative w-32 h-40">
                <Image src={icon.attributes.iconos.data.attributes.url} alt={`Icon ${index + 1}`} layout="fill" objectFit="contain" />
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          {sortedLineasDeAccion.slice(3, 6).map((icon, index) => (
            <button
              key={icon.id}
              className={classNames('w-56 h-52 flex items-center justify-center rounded-lg', colors[index + 3])}
              onClick={() => handleClick(index + 3)}
            >
              <div className="relative w-32 h-40">
                <Image src={icon.attributes.iconos.data.attributes.url} alt={`Icon ${index + 4}`} layout="fill" objectFit="contain" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lineasdeaccion;

