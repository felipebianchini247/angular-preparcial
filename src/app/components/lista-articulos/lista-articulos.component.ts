import { VERSION } from '@angular/compiler/src/version';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css'],
})
export class ListaArticulosComponent implements OnInit {
  titulo = 'Lista de articulos';
  alturaImagen = 40;
  filtro: string;

  articulos: any[] = [
    {
      id: 2,
      descripcion: 'Articulo X',
      codigo: 'xsd-143',
      cantidad: 139,
      precio: 1221.4,
      puntaje: 4,
      imagen: 'https://i.blogs.es/a5a58f/1366_2000/1366_2000.png',
      active: true,
    },
    {
      id: 5,
      descripcion: 'Articulo Y',
      codigo: 'dlg-912',
      cantidad: 336,
      precio: 400.99,
      puntaje: 3,
      imagen: 'https://m.media-amazon.com/images/I/61B0qTsNumL._AC_SX522_.jpg',
      active: false,
    },
  ];

  constructor() {}

  ngOnInit() {}

  obtenerVersion(): string {
    return VERSION.full;
  }

  limpiar(): void {
    this.articulos = [];
    this.filtro = '';
  }

  cambiarEstado(art): void {
    art.active = !art.active;
  }
}
