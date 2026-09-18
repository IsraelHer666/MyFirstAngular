import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';

declare const M: any;

@Component({
  selector: 'app-root', //como se identificara el componente
  standalone: false,
  styleUrl: './app.css', //estilos
  templateUrl: './app.html' //maquetado
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('cellphone');
  //definiendo variables para ser llamadas de manera posterior.
  inicio = "Inicio" 
  categorias = "Categorias"
  catalogo = "Catalogo"
  contacto = "Contacto"
  sucursales = "Sucursales"
  redesSociales = "Redes Sociales"
  logo = "/img/iconDesign.png"
  logoNav = "/img/iconNav.png"

  private sidenav: any;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const elem = this.el.nativeElement.querySelector('.sidenav');
    if (elem) {
      this.sidenav = M.Sidenav.init(elem);
    }
  }

  ngOnDestroy(): void {
    this.sidenav?.destroy();
  }
}
