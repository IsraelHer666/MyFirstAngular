import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root', //como se identificara el componente
  standalone: false,
  styleUrl: './app.css', //estilos
  templateUrl: './app.html' //maquetado
})
export class App {
  protected readonly title = signal('cellphone');
}
