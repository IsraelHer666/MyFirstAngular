import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-inicio',
  standalone: false,
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio implements AfterViewInit, OnDestroy {
  tituloSlider1 = "Diseño moderno y elegante";
  descSlider1 = "Explora nuestros servicios";
  tituloSlider2 = "Tecnología de vanguardia";
  descSlider2 = "Innovación en cada detalle";
  tituloSlider3 = "Calidad garantizada";
  descSlider3 = "Satisfacción asegurada";

  private slider: any;

  constructor(private el: ElementRef<HTMLElement>) {}

  //el slider se inicializa aqui porque Angular pinta el HTML despues de DOMContentLoaded
  ngAfterViewInit(): void {
    const elem = this.el.nativeElement.querySelector('.slider');
    if (elem) {
      this.slider = M.Slider.init(elem, {
        indicators: true, // Muestra los puntos indicadores abajo
        height: 400,      // Altura base (en fullscreen toma 100vh automaticamente)
        duration: 500,    // Duracion de la transicion en milisegundos
        interval: 6000    // Tiempo de espera entre cada diapositiva
      });
    }
  }

  ngOnDestroy(): void {
    this.slider?.destroy();
  }
}
