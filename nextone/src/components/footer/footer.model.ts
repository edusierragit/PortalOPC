import { parseISO } from 'date-fns';

// Modelo del backend!

export interface FooterStrapi {
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

export class Footer {
  id: number = 0;
  
  Expedienteslink?: string;
  SeguridadvialLink?: string;
  ARBA_Link?: string;
  BoletinOficialLink?: string;
  Webmail_GBA_Link?: string;
  WEbmail_HORDE_Link?: string;
  SistemasLink?: string;
  GDEBA_Link?: string;
  Portaldelempleado_Link?: string;
  PoliticasdePrivacidad_Link?: string;
  IMAGENLOGOFOOTER?: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  

    constructor(footer?: FooterStrapi) {
      if(footer) {
        this.id = footer.id;
  
        this.Expedienteslink=footer.attributes.Expedienteslink;
        this.SeguridadvialLink=footer.attributes.SeguridadvialLink;
        this.ARBA_Link=footer.attributes.ARBA_Link;
        this.BoletinOficialLink=footer.attributes.BoletinOficialLink;
        this.Webmail_GBA_Link=footer.attributes.Webmail_GBA_Link;
        this.WEbmail_HORDE_Link=footer.attributes.WEbmail_HORDE_Link;
        this.SistemasLink=footer.attributes.SistemasLink;
        this.GDEBA_Link=footer.attributes.GDEBA_Link;
        this.Portaldelempleado_Link=footer.attributes.Portaldelempleado_Link;
        this.PoliticasdePrivacidad_Link=footer.attributes.PoliticasdePrivacidad_Link;
        this.IMAGENLOGOFOOTER=footer.attributes.IMAGENLOGOFOOTER;
        this.createdAt=parseISO(footer.attributes.createdAt);
        this.updatedAt=parseISO(footer.attributes.updatedAt);
        this.publishedAt=footer.attributes.publishedAt?parseISO(footer.attributes.publishedAt):parseISO(footer.attributes.createdAt);
      }
    }
}