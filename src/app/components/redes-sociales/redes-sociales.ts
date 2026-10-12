import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: false,
  styleUrl: './redes-sociales.css',
  templateUrl: './redes-sociales.html',
})
export class RedesSociales {
  
  leyenda = "Todos los derechos reservados © 2026 Decoracion de interiores:";

  redes = [
    {
      "nombre" : "Facebook",
      "icono" : "fa-brands fa-facebook",
      "url" : "https://www.facebook.com/",
      "color" : "#1877F2"
    },
    {
      "nombre" : "TikTok",
      "icono" : "fa-brands fa-tiktok",
      "url" : "https://www.tiktok.com/",
      "color" : "#000000"
    },
    {
      "nombre" : "YouTube",
      "icono" : "fa-brands fa-youtube",
      "url" : "https://www.youtube.com/",
      "color" : "#FF0000"
    },
    {
      "nombre" : "Instagram",
      "icono" : "fa-brands fa-instagram",
      "url" : "https://www.instagram.com/",
      "color" : "#E4405F"
    }
  ]

}
