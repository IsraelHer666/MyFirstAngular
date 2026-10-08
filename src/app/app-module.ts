import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './components/app';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { MisionVision } from './components/mision-vision/mision-vision';

@NgModule({
  declarations: [App, Inicio, Categorias, MisionVision], //se dan de alta los componentes
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Inicio, Categorias, MisionVision], //se inidican los componentes de la aplicacion.
})
export class AppModule {}
