import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';

interface FooterData {
  id: number;
  attributes: {
    Expedienteslink: string;
    SeguridadvialLink: string;
    ARBA_Link: string;
    BoletinOficialLink: string;
    Webmail_GBA_Link: string;
    WEbmail_HORDE_Link: string;
    SistemasLink: string;
    GDEBA_Link: string;
    Portaldelempleado_Link: string;
    PoliticasdePrivacidad_Link: string;
    IMAGENLOGOFOOTER: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
const Footerpageopc: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    // Lógica para obtener los datos del footer desde la API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/footers?populate=*');
        const data = await response.json();
        // Asigna los datos obtenidos al estado
        setFooterData(data.data[0]);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchData();
  }, []);




 
  if (!footerData) {
    return null; // Puedes retornar null o algún indicador de carga mientras se obtienen los datos
  }

  return (
    <div>
         <footer className="footer font-sans justify-center h-158 mx-auto mt-14 flex items-center">
        <div className="flex mr-24 ">
        <Image src={footerData?.attributes.IMAGENLOGOFOOTER.data.attributes.url} alt="Imagen OPC" width={600} height={60} />

        </div>

        <div>
          <span className="footer-title">Guia Servicios</span>
          <a className="link link-hover" href={footerData?.attributes.Expedienteslink}>
            Expedientes
          </a>
          <a className="link link-hover" href={footerData?.attributes.SeguridadvialLink}>
            Seguridad Vial
          </a>
          <a className="link link-hover" href={footerData?.attributes.ARBA_Link}>
            ARBA
          </a>
          <a className="link link-hover" href={footerData?.attributes.BoletinOficialLink}>
            Boletin Oficial
          </a>
        </div>

        <div>
          <span className="footer-title">Uso Interno</span>
          <a className="link link-hover" href={footerData?.attributes.Webmail_GBA_Link}>
            Webmail GBA
          </a>
          <a className="link link-hover" href={footerData?.attributes.WEbmail_HORDE_Link}>
            Webmail HORDE
          </a>
          <a className="link link-hover" href={footerData?.attributes.SistemasLink}>
            Sistemas
          </a>
        </div>

        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover" href={footerData?.attributes.GDEBA_Link}>
            GDEBA
          </a>
          <a className="link link-hover" href={footerData?.attributes.Portaldelempleado_Link}>
            Portal del empleado/a
          </a>
          <a className="link link-hover" href={footerData?.attributes.PoliticasdePrivacidad_Link}>
            Políticas de Privacidad
          </a>
        

          <div className="grid grid-flow-col gap-4">
  
      <a href="https://www.facebook.com/BAProvincia/">
        <svg xmlns="" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      <a href="https://www.youtube.com/channel/UCRuY8kHZHaiqAAdjcgobsNw">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbaprovincia">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a href="https://www.instagram.com/provinciaba/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
    </div>
  </footer>

  </div>
  )
      }

export default Footerpageopc;