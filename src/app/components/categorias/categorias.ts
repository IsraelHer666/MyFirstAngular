import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-categorias',
  standalone: false,
  styleUrl: './categorias.css',
  templateUrl: './categorias.html',
})
export class Categorias implements AfterViewInit {
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
          imagenes: [
            '/img/productos/vela_vainilla/vela-vainilla-1.png',
            '/img/productos/vela_vainilla/vela-vainilla-2.jpg',
            '/img/productos/vela_vainilla/vela-vainilla-3.jpg',
          ],
          precio: 189,
          descuento: true,
          descripcion: 'Vela aromática en vaso de vidrio.',
        },
        {
          nombre: 'Vela de lavanda',
          disponible: false,
          nuevo: true,
          imagen: 'img/productos/vela-lavanda.jpg',
          imagenes: [
            'img/productos/vela_lavanda/vela_lavanda_1.jpg',
            '/img/productos/vela_lavanda/vela_lavanda_2.jpg',
            '/img/productos/vela_lavanda/vela_lavanda_3.jpg',
          ],
          precio: 215,
          descuento: true,
          descripcion: 'Aroma floral para espacios relajantes.',
        },
        {
          nombre: 'Vela de ámbar',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/vela-ambar.jpg',
          imagenes: [
            'img/productos/vela_ambar/vela-ambar-1.png',
            'img/productos/vela_ambar/vela-ambar-2.jpg',
            'img/productos/vela_ambar/vela-ambar-3.jpg',
          ],
          precio: 249,
          descuento: true,
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
          nuevo: true,
          imagen: 'img/productos/lampara-mesa.jpg',
          imagenes: [
            'img/productos/lampara_mesa/lampara-mesa-1.png',
            'img/productos/lampara_mesa/lampara-mesa-2.jpg',
            'img/productos/lampara_mesa/lampara-mesa-3.jpg',
          ],
          precio: 890,
          descuento: false,
          descripcion: 'Base de cerámica y pantalla textil.',
        },
        {
          nombre: 'Lámpara de arco',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/lampara-arco.jpg',
          imagenes: [
            'img/productos/lampara_arco/lampara-arco-1.png',
            'img/productos/lampara_arco/lampara-arco-2.png',
            'img/productos/lampara_arco/lampara-arco-3.png',
          ],
          precio: 2390,
          descuento: false,
          descripcion: 'Diseño curvo para sala o lectura.',
        },
        {
          nombre: 'Lámpara colgante',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/lampara-colgante.jpg',
          imagenes: [
            'img/productos/vela_vainilla/vela-vainilla-1.png',
            'img/productos/vela_vainilla/vela-vainilla-2.jpg',
            'img/productos/vela_vainilla/vela-vainilla-3.jpg',
          ],
          precio: 1490,
          descuento: false,
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
          nuevo: true,
          imagen: 'img/productos/cuadro-abstracto.png',
          imagenes: [
            'img/productos/cuadro-abstracto/cuadro-abstracto1.png',
            'img/productos/cuadro-abstracto/cuadro-abstracto2.jpg',
            'img/productos/cuadro-abstracto/cuadro-abstracto3.jpg',
          ],
          precio: 720,
          descuento: true,
          descripcion: 'Composición en tonos neutros.',
        },
        {
          nombre: 'Cuadro botánico',
          disponible: false,
          nuevo: false,
          imagen: 'img/productos/cuadro-botanico.jpg',
          imagenes: [
            'img/productos/cuadro-botanico/cuadro-botanico-1.jpg',
            'img/productos/cuadro-botanico/cuadro-botanico-2.jpg',
            'img/productos/cuadro-botanico/cuadro-botanico-3.jpg',
          ],
          precio: 650,
          descuento: false,
          descripcion: 'Ilustración de hojas con marco claro.',
        },
        {
          nombre: 'Cuadro geométrico',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/cuadro-geometrico.jpg',
          imagenes: [
            'img/productos/cuadro-geometrico/cuadro-geometrico-1.jpg',
            'img/productos/cuadro-geometrico/cuadro-geometrico-2.jpg',
            'img/productos/cuadro-geometrico/cuadro-geometrico-3.jpg',
          ],
          precio: 790,
          descuento: true,
          descripcion: 'Formas simples para espacios modernos.',
        },
        {
          nombre: 'Cuadro Artistico',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/cuadro-artistico.webp',
          imagenes: [
            'img/productos/cuadro-artistico/cuadro-artistico-1.jpg',
            'img/productos/cuadro-artistico/cuadro-artistico-2.jpg',
            'img/productos/cuadro-artistico/cuadro-artistico-3.jpg',
          ],
          precio: 890,
          descuento: true,
          descripcion: 'Pintura de autor',
        },
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
          nuevo: true,
          imagen: 'img/productos/sofa-modular.jpg',
          imagenes: [
            'img/productos/sofa-modular/sofa-modular-1.jpg',
            'img/productos/sofa-modular/sofa-modular-2.jpg',
            'img/productos/sofa-modular/sofa-modular-3.jpg',
          ],
          precio: 12990,
          descuento: true,
          descripcion: 'Asientos versátiles en tela color arena.',
        },
        {
          nombre: 'Mesa de centro',
          disponible: false,
          nuevo: false,
          imagen: 'img/productos/mesa-centro.jpg',
          imagenes: [
            'img/productos/mesa-centro/Mesa_centro1.jpg',
            'img/productos/mesa-centro/Mesa_zocalo2.jpg',
            'img/productos/mesa-centro/Mesa-zocalo3.jpg',
          ],
          precio: 3290,
          descuento: false,
          descripcion: 'Superficie de madera y estructura ligera.',
        },
        {
          nombre: 'Repisa flotante',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/repisa-flotante.jpg',
          imagenes: [
            'img/productos/repisa-flotante/repisa_flotante1.png',
            'img/productos/repisa-flotante/repisa_flotante2.jpg',
            'img/productos/repisa-flotante/repisa_flotante_3.jpg',
          ],
          precio: 990,
          descuento: true,
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
          nuevo: true,
          imagen: 'img/productos/jarron-ceramica.jpg',
          imagenes: [
            'img/productos/jarron-ceramica/jarron_ceramica1.jpg',
            'img/productos/jarron-ceramica/jarron_ceramica2.jpg',
            'img/productos/jarron-ceramica/jarron_ceramica3.jpg',
          ],
          precio: 460,
          descuento: true,
          descripcion: 'Pieza artesanal en acabado mate.',
        },
        {
          nombre: 'Espejo redondo',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/espejo-redondo.png',
          imagenes: [
            'img/productos/espejo-redondo/espejo_redondo_1.jpg',
            'img/productos/espejo-redondo/espejo_redondo_2.jpg',
            'img/productos/espejo-redondo/espejo_redondo_3.jpg',
          ],
          precio: 1190,
          descuento: false,
          descripcion: 'Marco delgado para recibidor o sala.',
        },
        {
          nombre: 'Bandeja decorativa',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/bandeja-decorativa.jpg',
          imagenes: [
            'img/productos/bandeja-decorativa/bandeja_decorativa_1.jpg',
            'img/productos/bandeja-decorativa/bandeja_decorativa_2.jpg',
            'img/productos/bandeja-decorativa/bandeja_decorativa_3.jpg',
          ],
          precio: 390,
          descuento: true,
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
          nombre: 'Orquidea blanca',
          disponible: true,
          nuevo: true,
          imagen: 'img/productos/orquidea-blanca.jpeg',
          imagenes: [
            'img/productos/orquidea_blanca/orquidea_blanca_1.jpg',
            'img/productos/orquidea_blanca/orquidea_blanca_2.png',
            'img/productos/orquidea_blanca/orquidea_blanca_3.jpg',
          ],
          precio: 700,
          descuento: true,
          descripcion: 'Planta hermosa y elegante para interiores.',
        },
      ],
    },
  ];

  titulo = 'Coleccion para el hogar';
  subtitulo = 'Encuentra los mejores productos para la decoracion de tu hogar';
  slogan = 'Crea lugares unicos y acogedoras para tu hogar';
  productoSeleccionado: any = null;
  ngAfterViewInit(): void {
    const modales = document.querySelectorAll('modal');
    M.Modal.init(modales);
  }
  verDetalle(producto: any): void {
    this.productoSeleccionado = producto;
    setTimeout(() => {
      const carousel = document.querySelector('#galeriaProducto');
      if (carousel) {
        M.Carousel.init(carousel, { fullWidth: true, indicators: true });
      }
      const modal = document.querySelector('#modalDetalle');
      const instanciaModal = M.Modal.getInstance(modal);
      instanciaModal.open();
    }, 0);
  }

  departamentoSeleccionado = this.departamentos[0];

  seleccionarDepartamento(indice: number) {
    this.departamentoSeleccionado = this.departamentos[indice];
  }
}
