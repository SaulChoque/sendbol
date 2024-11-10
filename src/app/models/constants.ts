//model for constants
//IMG BAN 001
//extension, tipe, number
//BAN: banner

import { landingItem } from './landingItem';
import { SocialMedia } from './socialmedia';
import { svgs } from './svgs';
import { Article } from './article';
import { SizesFlagAnimation } from './sizesFlagAnimation';


export const Images = {
  //logo: require('../../assets/images/logo.png'),
  IMGBAN001: './assets/images/pages/landing/scr1.png',
  IMGBAN002: './assets/images/pages/landing/scr2.png',
  //avatar: require('../../assets/images/avatar.png'),
  //icon: require('../../assets/images/icon.png'),
};
/*
//Link de la pag de FB
FACEBOOK: 'https://www.facebook.com/profile.php?id=61567228988371',

//Link de la pag de Instagram
INSTAGRAM: 'https://www.instagram.com/sendbol_express/',


TWITTER: 'twitter',
*/
export const ARTICLES: Article[] = [
  {
    titulo: 'Términos y Condiciones sendbol',
    contenido: '',
    subtitulos: [
      {
        titulo: '1. Aceptación de los Términos',
        contenido: 'Al utilizar los servicios de sendbol, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguno de los términos, no debe utilizar nuestros servicios.',
        subtitulos: []
      },

      {
        titulo: '2. Descripción del Servicio',
        contenido: 'sendbol ofrece servicios de empaquetaría y envío desde Estados Unidos a Bolivia. El cliente contrata nuestros servicios para gestionar el envío de paquetes, realizar el seguimiento y asegurar que lleguen a su destino en las mejores condiciones posibles.',
        subtitulos: []
      },

      {
        titulo: '3. Responsabilidades del Cliente',
        contenido: 'Precisión de la información: El cliente es responsable de proporcionar información completa y precisa para el envío, incluyendo dirección de entrega, peso y contenido del paquete. Pago de tarifas: El cliente debe pagar las tarifas correspondientes antes de que se procesen los envíos. Las tarifas incluyen costos de envío, impuestos y tarifas aduaneras según sea necesario.Cumplimiento con la ley: El cliente debe asegurarse de que los productos enviados cumplen con las leyes de importación y exportación de ambos países.',
        subtitulos: []
      },

      {
        titulo: '4. Responsabilidades de sendbol',
        contenido: 'Transporte: Nos comprometemos a manejar el envío de los paquetes de acuerdo con nuestros estándares de calidad y seguridad. Entrega: Haremos todo lo posible para que el paquete llegue a su destino dentro del tiempo estimado, pero no somos responsables por retrasos causados por aduanas, condiciones climáticas o cualquier otro evento fuera de nuestro control. Seguimiento: Proporcionaremos información de seguimiento para cada paquete, pero no garantizamos actualizaciones en tiempo real.',
        subtitulos: []
      },

      {
        titulo: '5. Productos Prohibidos',
        contenido: 'No aceptamos envíos que contengan productos ilegales, peligrosos o restringidos, como armas, drogas, materiales inflamables o explosivos. Cualquier violación de esta política puede resultar en la cancelación del servicio y notificación a las autoridades competentes.',
        subtitulos: []
      },

      {
        titulo: '6. Política de Devoluciones',
        contenido: 'No ofrecemos reembolsos por el servicio de envío una vez que el paquete ha sido despachado. Si un paquete es devuelto debido a errores en la dirección proporcionada o el incumplimiento de las leyes aduaneras, el cliente será responsable de cualquier costo adicional.',
        subtitulos: []
      },

      {
        titulo: '7. Propiedad Intelectual',
        contenido: 'Todo el contenido del sitio web, incluyendo textos, gráficos, logotipos y software, es propiedad de sendbol y está protegido por las leyes de derechos de autor y marcas comerciales.',
        subtitulos: []
      },

      {
        titulo: '8. Limitación de Responsabilidad',
        contenido: 'sendbol no será responsable por daños directos, indirectos o incidentales que resulten del uso o la incapacidad de uso de nuestro servicio, incluyendo pérdida de ganancias, datos o daños a la propiedad.',
        subtitulos: []
      },

      {
        titulo: '9. Modificación de los Términos',
        contenido: 'Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos una vez publicados en nuestro sitio web. Es responsabilidad del cliente revisar los términos periódicamente.',
        subtitulos: []
      },

      {
        titulo: '10. Jurisdicción',
        contenido: 'Estos términos están regidos por las leyes de Bolivia y cualquier disputa relacionada con estos términos será resuelta en los tribunales correspondientes.',
        subtitulos: []
      },
    ]
  },

  {
    titulo: 'Política de Tratamiento de Datos Personales sendbol',
    contenido: 'En sendbol, nos comprometemos a proteger su privacidad mientras utiliza nuestro sitio web y en su comunicación con nosotros, ya sea a través de la plataforma o por correo electrónico.',
    subtitulos: [
      {
        titulo: '1. Información Personal Recopilada',
        contenido: 'Durante el funcionamiento de nuestra empresa y sitio web, podemos recopilar y procesar ciertos datos personales. Esto puede incluir:',
        subtitulos: [
          {
            titulo: 'Informacion de visita',
            contenido: 'Detalles de su visita a nuestro sitio web y el contenido que consulta. Esto puede incluir datos de ubicación, datos de comunicación, y lo que usted accede dentro de nuestra plataforma.',
            subtitulos: []
          },

            {
              titulo: 'Información de registro',
              contenido: 'Información proporcionada al registrarse en nuestro sitio web, como su nombre, dirección de correo electrónico y número de teléfono.',
              subtitulos: []
            },

            {
              titulo: 'Información de formularios',
              contenido: 'Información de los formularios completados en nuestro sitio web, así como datos necesarios para procesar pedidos y realizar envíos.',
              subtitulos: []
            },

            {
              titulo: 'Información de contacto',
              contenido: 'Información personal como nombres, direcciones de correo electrónico, números de teléfono, dirección de envío, y datos de pago necesarios para el procesamiento de sus órdenes.',
              subtitulos: []
            },
        ]
      },

      {
        titulo: '2. ¿Quién recopila los datos?',
        contenido: 'La información es recopilada por sendbol, registrada en nuestra base de datos. Si tiene alguna consulta sobre la política de privacidad, puede contactarnos en contact@sendbol.com.',
        subtitulos: []
      },

      {
        titulo: '3. Cómo recopilamos la información',
        contenido: 'Recopilamos información personal de diversas maneras, ya sea cuando usted nos la proporciona directamente al hacer una compra o cuando navega por nuestro sitio web. Esta información puede incluir:',
        subtitulos: [
          {
            titulo: 'Información de registro',
            contenido: 'Información que usted proporciona al crear una cuenta, comprar un servicio, suscribirse a un boletín o interactuar de cualquier forma con nuestro sitio web. Información de terceros como plataformas de pago y sistemas de envío.',
            subtitulos: []
          },
        ]
      },

      {
        titulo: '4. Información Recolectada por Terceros',
        contenido: 'Podemos recibir información de terceros, como servicios de análisis de datos o plataformas de publicidad, con el objetivo de mejorar nuestra oferta de servicios. Algunas plataformas que utilizamos incluyen:',
        subtitulos: [
          {
            titulo: 'Google Analytics',
            contenido: 'Para análisis de datos del tráfico en el sitio web.',
            subtitulos: []
          },

          {
            titulo: 'Google Tag Manager',
            contenido: 'Para gestionar etiquetas y herramientas de seguimiento.',
            subtitulos: []
          },

          {
            titulo: 'Facebook Ads',
            contenido: 'Para publicidad y análisis de datos.',
            subtitulos: []
          },

          {
            titulo: 'MailChimp',
            contenido: 'Para el envío de boletines y correos electrónicos.',
            subtitulos: []
          },

          {
            titulo: 'Plataformas de pago seguras',
            contenido: ' Para procesar sus transacciones financieras.',
            subtitulos: []
          },

        ]
      },

      {
        titulo: '5. Cookies',
        contenido: 'Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos de datos que se almacenan en su navegador mientras visita nuestro sitio web, permitiendo que recordemos sus preferencias y optimicemos el rendimiento de la página. Puede gestionar las cookies desde la configuración de su navegador. Sin embargo, deshabilitar cookies podría afectar la funcionalidad de ciertas partes del sitio web.',
        subtitulos: []
      },

      {
        titulo: '6. Uso de la Información',
        contenido: 'La información que recopilamos es utilizada principalmente para facilitar y mejorar la experiencia en nuestro sitio web y permitir la realización de envíos internacionales. También puede ser utilizada para:',
        subtitulos: [

          {
            titulo: 'Gestion de pedidos',
            contenido: 'Procesar sus pedidos y asegurarnos de que los paquetes lleguen a su destino de manera segura y eficiente.',
            subtitulos: []
          },

          {
            titulo: 'Atencion al cliente',
            contenido: 'Brindar soporte al cliente y responder consultas.',
            subtitulos: []
          },

          {
            titulo: 'Personalizacion',
            contenido: 'Personalizar su experiencia en nuestro sitio web.',
            subtitulos: []
          },

          {
            titulo: 'Transacciones',
            contenido: 'Procesar sus transacciones y mantener un historial de pedidos.',
            subtitulos: []
          },

          {
            titulo: 'Notificaciones',
            contenido: 'Notificarle sobre cambios importantes en nuestra política de privacidad o términos de servicio.',
            subtitulos: []
          },

          {
            titulo: 'Encuestas',
            contenido: 'Realizar encuestas o enviar ofertas promocionales relevantes.',
            subtitulos: []
          },
        ]
      },

      {
        titulo: '7. ¿Cómo protegemos su información?',
        contenido: 'Implementamos varias medidas de seguridad para proteger la información personal que recopilamos. Nuestro sitio web utiliza tecnología de cifrado SSL (Secure Socket Layer) para proteger las transacciones y asegurarnos de que la información confidencial se mantenga segura durante su transmisión.',
        subtitulos: []
      },

      {
        titulo: '8. Almacenamiento de Datos',
        contenido: 'Toda la información personal recopilada es almacenada en servidores seguros. Las transacciones financieras están protegidas con encriptación SSL, y sus datos personales solo serán accesibles por el personal autorizado, quienes deben mantener la confidencialidad de los datos.',
        subtitulos: []
      },

      {
        titulo: '9. Divulgación de la Información',
        contenido: 'No compartimos su información personal con terceros, a menos que sea necesario para completar los envíos o cumplir con la ley. Los proveedores que trabajan con nosotros para operar el sitio web o procesar pedidos deben mantener la confidencialidad de la información y no utilizarla para ningún otro fin.',
        subtitulos: []
      },

      {
        titulo: '10. Eliminacion de sus datos',
        contenido: 'Si decide que ya no desea utilizar nuestros servicios, tiene el derecho de solicitar la eliminación de su cuenta y la información personal asociada. Para hacerlo, comuníquese con nosotros a través de contact@sendbol.com, y eliminaremos sus datos de nuestros sistemas una vez confirmada su solicitud.',
        subtitulos: []
      },
    ]
  },

];






export const SOCIALMEDIA: SocialMedia[] = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=61567228988371',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/sendbol_express/',
  },
  {
    name: 'twitter',
    url: 'twitter',
  },
];

export const FLAGSIZES: SizesFlagAnimation[] = [
  {
    screenType: 'Computer',
    div: 'height: 500px; width: 500px;',
    world: '400px',
    usaFlag: '200px',
    bolFlag: '200px',
    sync: '150px',
  },
  {
    screenType: 'Phone',
    div: 'height: 360px; width: 360px;',
    world: '350px',
    usaFlag: '150px',
    bolFlag: '150px',
    sync: '100px',
  },

];

export const SizesConstants = {
  LANDINGIMAGES: ['400px', '600px', '600px'],
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

export const SVGS: svgs[] = [
  {
    id: 'facebook',
    viewbox: '0 0 16 16',
    pathD:
      'M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z',

  },
  {
    id: 'instagram',
    viewbox: '0 0 16 16',
    pathD:
      'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'
  },
  {
    id: 'twitter',
    viewbox: '0 0 16 16',
    pathD:
      'M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z',
  }
];
//src\assets\images\pages\landing\scr1.png


