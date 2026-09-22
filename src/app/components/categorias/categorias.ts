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
          imagen: 'img/productos/vela-vainilla.jpg',
          precio: 189,
          descripcion: 'Vela aromática en vaso de vidrio.',
        },
        {
          nombre: 'Vela de lavanda',
          imagen: 'img/productos/vela-lavanda.jpg',
          precio: 215,
          descripcion: 'Aroma floral para espacios relajantes.',
        },
        {
          nombre: 'Vela de ámbar',
          imagen: 'img/productos/vela-ambar.jpg',
          precio: 249,
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
          imagen: 'img/productos/lampara-mesa.jpg',
          precio: 890,
          descripcion: 'Base de cerámica y pantalla textil.',
        },
        {
          nombre: 'Lámpara de arco',
          imagen: 'img/productos/lampara-arco.jpg',
          precio: 2390,
          descripcion: 'Diseño curvo para sala o lectura.',
        },
        {
          nombre: 'Lámpara colgante',
          imagen: 'img/productos/lampara-colgante.jpg',
          precio: 1490,
          descripcion: 'Iluminación moderna para comedor.',
        },
      ],
    },
    {
      nombre: 'Cuadros',
      icono: 'fa-solid fa-image',
      descripcion: 'Arte y composiciones para dar personalidad a tus paredes.',
      productos: [
        {
          nombre: 'Cuadro abstracto',
          imagen: 'img/productos/cuadro-abstracto.png',
          precio: 720,
          descripcion: 'Composición en tonos neutros.',
        },
        {
          nombre: 'Cuadro botánico',
          imagen: 'img/productos/cuadro-botanico.jpg',
          precio: 650,
          descripcion: 'Ilustración de hojas con marco claro.',
        },
        {
          nombre: 'Cuadro geométrico',
          imagen: 'img/productos/cuadro-geometrico.jpg',
          precio: 790,
          descripcion: 'Formas simples para espacios modernos.',
        },
        {
          nombre: 'Cuadro Artistico',
          imagen: 'img/productos/cuadro-artistico.webp',
          precio: 890,
          descripcion: 'Pintura de autor'
        }
      ],
    },
    {
      nombre: 'Muebles minimalistas',
      icono: 'fa-solid fa-couch',
      descripcion: 'Muebles de líneas limpias que aprovechan cada espacio.',
      productos: [
        {
          nombre: 'Sofá modular',
          imagen: 'img/productos/sofa-modular.jpg',
          precio: 12990,
          descripcion: 'Asientos versátiles en tela color arena.',
        },
        {
          nombre: 'Mesa de centro',
          imagen: 'img/productos/mesa-centro.jpg',
          precio: 3290,
          descripcion: 'Superficie de madera y estructura ligera.',
        },
        {
          nombre: 'Repisa flotante',
          imagen: 'img/productos/repisa-flotante.jpg',
          precio: 990,
          descripcion: 'Almacenamiento discreto para pared.',
        },
      ],
    },
    {
      nombre: 'Objetos varios',
      icono: 'fa-solid fa-gem',
      descripcion: 'Detalles que aportan textura y estilo a tu hogar.',
      productos: [
        {
          nombre: 'Jarrón de cerámica',
          imagen: 'img/productos/jarron-ceramica.jpg',
          precio: 460,
          descripcion: 'Pieza artesanal en acabado mate.',
        },
        {
          nombre: 'Espejo redondo',
          imagen: 'img/productos/espejo-redondo.png',
          precio: 1190,
          descripcion: 'Marco delgado para recibidor o sala.',
        },
        {
          nombre: 'Bandeja decorativa',
          imagen: 'img/productos/bandeja-decorativa.jpg',
          precio: 390,
          descripcion: 'Accesorio para organizar pequeños objetos.',
        },
      ],
    },
    {
      nombre: 'Plantas y macetas',
      icono: 'fa-solid fa-seedling',
      descripcion: 'Verde natural para purificar y decorar tus espacios.',
      productos: [
        {
          nombre:'Orquidea blanca',
          imagen: 'img/productos/orquidea-blanca.jpeg',
          precio: 700,
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
