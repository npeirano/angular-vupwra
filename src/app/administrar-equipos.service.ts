import { Injectable } from '@angular/core';


@Injectable()
export class AdministrarEquiposService {

    equipos = [];

  agregarEquipo(equipo) {
    this.equipos.push(equipo);
  }
   getEquipos() {
    return this.equipos;
  }

  constructor() { }

}