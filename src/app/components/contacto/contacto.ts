import { Component, AfterViewInit } from '@angular/core';
declare var M: any; //despues

@Component({
  selector: 'app-contacto',
  standalone: false,
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto  implements AfterViewInit{
  ngAfterViewInit(): void {
    var elements = document.querySelectorAll('select');
    M.FormSelect.init(elements);
  }
  nombre = "Nombre";
  email = "Email";
  telefono  = "Telefono"
  fecha = "Selecciona la fecha"
}
