import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListaArticulosComponent } from './components/lista-articulos/lista-articulos.component';
import { ConvertirAEspacioPipe } from './shared/convertir-aespacio.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],

  declarations: [
    AppComponent,
    HelloComponent,
    ListaArticulosComponent,
    ConvertirAEspacioPipe,
  ],

  bootstrap: [AppComponent, ListaArticulosComponent],
})
export class AppModule {}
