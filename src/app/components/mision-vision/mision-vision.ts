import { Component } from '@angular/core';

@Component({
  selector: 'app-mision-vision',
  standalone: false,
  styleUrl: './mision-vision.css',
  templateUrl: './mision-vision.html',
})
export class MisionVision {
titulo = "Nuestra Misión y Visión"
misionVision = [
  {
    titulo: "Mision",
    icono:"crop_original",
    descripcion: "Ser la empresa lider en ventas de muebles y accesorios para el hogar, ofreciendo productos de alta calidad.",
    descripcion2: "Asi mismo, generar un impacto positivo en la sociedad, posicionando nuestros productos como una opcion confiable.",
  },
  {
    titulo: "Vision",
    icono: "date_range",
    descripcion: "Para el año 2030 ser reconocidos como la empresa lider en produccion y comercializacion de muebles y accesorios para hogares.",
    descripcion2: "Ofrecer envios a bajo costo y de manera rapida, garantizando la satisfaccion de nuestros clientes."
  }
]

}
