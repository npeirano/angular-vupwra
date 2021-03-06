import { Injectable } from '@angular/core';
import { Equipo } from './equipo';
import { Partido } from './partido';
import Tournament from "./Tournament";
import {  Subject } from 'rxjs'




export interface Fecha  {
  nombre: string;
};

@Injectable()
export class AdministrarEquiposService {

    //equipos =  [] ;
    equipos = new Array<Equipo>();
    fixture = new Array<Array<Partido>>();
    tournament : Tournament;
    fechas: Fecha[] = [];
    pares: boolean;
    tournamentChange: Subject<string> = new Subject<string>();

    change(){
      this.tournamentChange.next();   
  }
    


  agregarEquipo(eq: Equipo) {
    if(eq.name !=null) {
       let nroEquipos= this.equipos.length;
    if(this.equipos === null || this.equipos.length === 0)
      eq.id = 1;
    else
      eq.id = this.equipos.length + 1;
    this.equipos.push(eq);

      }
   
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
    this.change();
    const cantFechas = this.tournament.matches.length;    
    for (let i = 0; i< cantFechas;i++){
      let fecha = { nombre:"Fecha " + (i + 1)};
      this.fechas[i] = fecha;
    }  
}

}