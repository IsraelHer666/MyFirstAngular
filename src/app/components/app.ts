import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root', //como se identificara el componente
  standalone: false,
  styleUrl: './app.css', //estilos
  templateUrl: './app.html' //maquetado
})
export class App {
  protected readonly title = signal('cellphone');
  //definiendo variables para ser llamadas de manera posterior.
  inicio = "Inicio" 
  categorias = "Categorias"
  catalogo = "Catalogo"
  contacto = "Contacto"
  sucursales = "Sucursales"
  redesSociales = "Redes Sociales"
  logo = "/img/iconDesign.png"
}
