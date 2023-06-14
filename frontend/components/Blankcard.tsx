import Image from 'next/image';

export default function Blankcard() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row ">
    <img src="/Hospital Central de Alta Complejidad de Pilar.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-4xl font-bold">Se inauguro el Hospital Central de alta complejidad en PILAR</h1>
        <p className="py-6 text-2xl">“Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad"</p>
        <button className="btn btn-primary  bg-customTeal">Necesitan un boton aca?</button>
      </div>
    </div>
  </div>
  );
}

{/* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <Image src="/Hospital Central de Alta Complejidad de Pilar.png" alt="Blank" width={400} height={300}  />
    <div>
      <h1 className="text-4xl font-bold">SE INAUGURÓ EL HOSPITAL CENTRAL DE ALTA COMPLEJIDAD DE PILAR</h1>
      <p className="py-6">“Cuando construimos algo para nuestro pueblo, lo hacemos con la mejor calidad"</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}