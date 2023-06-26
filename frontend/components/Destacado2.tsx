import Image from 'next/image';

export default function Destacado2() {
  return (
    <div className="hero  bg-white ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/Hospital Central de Alta Complejidad de Pilar.png" className="max-w-sm  shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold">
            Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad</h1>
            
          <p className="py-6 text-2x1  overflow-y-auto ">El gobernador de la Provincia de Buenos Aires, Axel Kicillof, participó del acto de inauguración del nuevo nosocomio para los y las pilarenses.
            El intendente de Pilar, Federico Achaval, detalló las nuevas obras y manifestó: "Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad".</p>
   
              
            
          <button className="btn bg-white text-black">Leer mas...</button>
        </div>
      </div>
    </div>
  );
}