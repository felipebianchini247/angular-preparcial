import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntaje',
  templateUrl: './puntaje.component.html',
  styleUrls: ['./puntaje.component.css'],
})
export class PuntajeComponent implements OnInit {
  puntaje: number = 4;
  puntajeAncho: number;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.puntajeAncho = (this.puntaje * 68) / 5;
  }
}
