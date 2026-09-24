import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: false,
  styleUrl: './categorias.css',
  templateUrl: './categorias.html',
})    
export class Categorias {
  titulo = "Coleccion para el hogar";
  subtitulo = "Encuentra los mejores productos para la decoracion de tu hogar";
  slogan = "Crea lugares unicos y acogedoras para tu hogar";
  departamentos = [
    {
      nombre: 'Velas',
      icono: 'fa-solid fa-fire-flame-curved',
      descripcion: 'Aromas y luz cálida para crear ambientes acogedores.',
      productos: [
        {
          nombre: 'Vela de vainilla',
          disponible: true,
          imagen: 'img/productos/vela-vainilla.jpg',
          precio: 189,
          descuento:true,
          descripcion: 'Vela aromática en vaso de vidrio.',
        },  
        {
          nombre: 'Vela de lavanda',
          disponible: false,
          imagen: 'img/productos/vela-lavanda.jpg',
          precio: 215,
          descuento:true,
          descripcion: 'Aroma floral para espacios relajantes.',
        },
        {
          nombre: 'Vela de ámbar',
          disponible: true,
          imagen: 'img/productos/vela-ambar.jpg',
          precio: 249,
          descuento:true,
          descripcion: 'Fragancia cálida con acabado elegante.',
        },
      ],
    },
    {
      nombre: 'Lámparas',
      icono: 'fa-solid fa-lightbulb',
      descripcion: 'Iluminación funcional y decorativa para cada rincón.',
      productos: [
        {
          nombre: 'Lámpara de mesa',
          disponible: true,
          imagen: 'img/productos/lampara-mesa.jpg',
          precio: 890,
          descuento:false,
          descripcion: 'Base de cerámica y pantalla textil.',
        },
        {
          nombre: 'Lámpara de arco',
          disponible: true,
          imagen: 'img/productos/lampara-arco.jpg',
          precio: 2390,
          descuento:false,
          descripcion: 'Diseño curvo para sala o lectura.',
        },
        {
          nombre: 'Lámpara colgante',
          disponible: true,
          imagen: 'img/productos/lampara-colgante.jpg',
          precio: 1490,
          descuento:false,
          descripcion: 'Iluminación moderna para comedor.',
        },
      ],
    },
    {
      nombre: 'Cuadros',
      disponible: true,
      icono: 'fa-solid fa-image',
      descripcion: 'Arte y composiciones para dar personalidad a tus paredes.',
      productos: [
        {
          nombre: 'Cuadro abstracto',
          disponible: true,
          imagen: 'img/productos/cuadro-abstracto.png',
          precio: 720,
          descuento:true,
          descripcion: 'Composición en tonos neutros.',
        },
        {
          nombre: 'Cuadro botánico',
          disponible: false,
          imagen: 'img/productos/cuadro-botanico.jpg',
          precio: 650,
          descuento:false,
          descripcion: 'Ilustración de hojas con marco claro.',
        },
        {
          nombre: 'Cuadro geométrico',
          disponible: true,
          imagen: 'img/productos/cuadro-geometrico.jpg',
          precio: 790,
          descuento:true,
          descripcion: 'Formas simples para espacios modernos.',
        },
        {
          nombre: 'Cuadro Artistico',
          disponible: true,
          imagen: 'img/productos/cuadro-artistico.webp',
          precio: 890,
          descuento:true,
          descripcion: 'Pintura de autor'
        }
      ],
    },
    {
      nombre: 'Muebles minimalistas',
      disponible: true,
      icono: 'fa-solid fa-couch',
      descripcion: 'Muebles de líneas limpias que aprovechan cada espacio.',
      productos: [
        {
          nombre: 'Sofá modular',
          disponible: true,
          imagen: 'img/productos/sofa-modular.jpg',
          precio: 12990,
          descuento:true,
          descripcion: 'Asientos versátiles en tela color arena.',
        },
        {
          nombre: 'Mesa de center',
          disponible: false,
          imagen: 'img/productos/mesa-centro.jpg',
          precio: 3290,
          descuento:false,
          descripcion: 'Superficie de madera y estructura ligera.',
        },
        {
          nombre: 'Repisa flotante',
          disponible: true,
          imagen: 'img/productos/repisa-flotante.jpg',
          precio: 990,
          descuento:true,
          descripcion: 'Almacenamiento discreto para pared.',
        },
      ],
    },
    {
      nombre: 'Objetos varios',
      disponible: false,
      icono: 'fa-solid fa-gem',
      descripcion: 'Detalles que aportan textura y estilo a tu hogar.',
      productos: [
        {
          nombre: 'Jarrón de cerámica',
          disponible: true,
          imagen: 'img/productos/jarron-ceramica.jpg',
          precio: 460,
          descuento:true,
          descripcion: 'Pieza artesanal en acabado mate.',
        },
        {
          nombre: 'Espejo redondo',
          disponible: true,
          imagen: 'img/productos/espejo-redondo.png',
          precio: 1190,
          descuento:false,
          descripcion: 'Marco delgado para recibidor o sala.',
        },
        {
          nombre: 'Bandeja decorativa',
          disponible: FileSystemWritableFileStream,
          imagen: 'img/productos/bandeja-decorativa.jpg',
          precio: 390,
          descuento:true,
          descripcion: 'Accesorio para organizar pequeños objetos.',
        },
      ],
    },
    {
      nombre: 'Plantas y macetas',
      disponible: true,
      icono: 'fa-solid fa-seedling',
      descripcion: 'Verde natural para purificar y decorar tus espacios.',
      productos: [
        {
          nombre:'Orquidea blanca',
          disponible: true,
          imagen: 'img/productos/orquidea-blanca.jpeg',
          precio: 700,
          descuento: true,
          descripcion: 'Planta hermosa y elegante para interiores.',
        }
      ]
    }
  ];

  departamentoSeleccionado = this.departamentos[0];

  seleccionarDepartamento(indice: number) {
    this.departamentoSeleccionado = this.departamentos[indice];
  }
}
