import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTAMOS EL MÓDULO DE FORMULARIOS
import { AppRoutingModule } from './app-routing-module';
import { App } from './components/app';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { MisionVision } from './components/mision-vision/mision-vision';
import { RedesSociales } from './components/redes-sociales/redes-sociales';
import { Contacto } from './components/contacto/contacto';

@NgModule({
  declarations: [
    App, 
    Inicio, 
    Categorias, 
    MisionVision, 
    RedesSociales, 
    Contacto // <-- Al estar declarado aquí, ya heredará FormsModule
  ], 
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule // <-- 2. LO AGREGAMOS EN LOS IMPORTS DEL MÓDULO
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App], // <-- 3. CORRECCIÓN: Solo el componente raíz (App) debe ir aquí
})
export class AppModule {}
