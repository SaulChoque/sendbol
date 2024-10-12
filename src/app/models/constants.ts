//model for constants
//IMG BAN 001
//extension, tipe, number
//BAN: banner

import { landingItem } from './landingItem';
export const Images = {
  //logo: require('../../assets/images/logo.png'),
  IMGBAN001: './assets/images/pages/landing/scr1.png',
  IMGBAN002: './assets/images/pages/landing/scr2.png',
  //avatar: require('../../assets/images/avatar.png'),
  //icon: require('../../assets/images/icon.png'),
};

export const LANDINGITEMS: landingItem[] = [
  {
    descripcion: 'ENVIA TUS PAQUETES DESDE ESTADOS UNIDOS A BOLIVIA',
    imgsrc: Images.IMGBAN001,
    orientacion: 'right',
    button: true,
    buttonName: 'Llevame alla',  
    buttonLink: '',
  },
  {
    descripcion: 'COMPRA EN TUS COMERCIOS FAVORITOS A PRECIOS COMPETITIVOS',
    imgsrc: Images.IMGBAN002,
    orientacion: 'left',
    button: false,
    buttonName: 'Llevame alla',  
    buttonLink: '',
  },
  {
    descripcion: 'CAUSA GAAAAA',
    imgsrc: Images.IMGBAN002,
    orientacion: 'left',
    button: false,
    buttonName: 'Llevame alla',  
    buttonLink: '',
  },
];
//src\assets\images\pages\landing\scr1.png
