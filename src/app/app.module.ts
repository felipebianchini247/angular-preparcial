import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],

  declarations: [
    AppComponent,
    HelloComponent,
    SaludoComponent,
    ListaArticulosComponent,
  ],

  bootstrap: [AppComponent, ListaArticulosComponent],
})
export class AppModule {}
