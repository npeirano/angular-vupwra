import { Injectable } from '@angular/core';
import { Equipo } from './equipo';


@Injectable()
export class AdministrarEquiposService {

    //equipos =  [] ;
    equipos = new Array<Equipo>();
    fixture = new Array<Array<Partido>>;


  agregarEquipo(eq: Equipo) {
    this.equipos.push(eq);
  }
   getEquipos() {
    return this.equipos;
  }

  constructor() { }


  crearFixu

}