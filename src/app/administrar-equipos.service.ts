import { Injectable } from '@angular/core';
import { Equipo } from './equipo';
import { Partido } from './partido';
import Tournament from "./Tournament";




@Injectable()
export class AdministrarEquiposService {

    //equipos =  [] ;
    equipos = new Array<Equipo>();
    fixture = new Array<Array<Partido>>();
    tournament : Tournament;


  agregarEquipo(eq: Equipo) {
    let nroEquipos= this.equipos.length;
    if(this.equipos === null || this.equipos.length === 0)
      eq.id = 1;
    else
      eq.id = this.equipos.length + 1;
    this.equipos.push(eq);
  }
   getEquipos() {
    return this.equipos;
  }

  constructor() { }

 nroEquiposPares(): boolean {
   return (this.equipos.length - 1) % 2 == 1;
}

  createMatches(){
    this.tournament = new Tournament(this.equipos);
    
}

}