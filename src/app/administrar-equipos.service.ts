import { Injectable } from '@angular/core';
import { Equipo } from './equipo';
import { Partido } from './partido';




@Injectable()
export class AdministrarEquiposService {

    //equipos =  [] ;
    equipos = new Array<Equipo>();
    fixture = new Array<Array<Partido>>();


  agregarEquipo(eq: Equipo) {
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
    let partido : Partido;
    for(let i = 0; i < this.equipos.length; i++){
        let fecha = new Array<Partido> ();
        let equipoActual = this.equipos[i]; // Hold team in a variable
        // Iterate through all teams
        for(let j = 0; j < this.equipos.length; j++){
            // If the teams are the same continue iterating
            if(equipoActual.nombre == this.equipos[j].nombre){
                continue;
            }else {
            // If teams are from same town, hold the teams in a temporary derby variable
                partido.local = equipoActual;
                partido.visitante = this.equipos[j];
                // Go through all matches checking if both teams have played before
                fecha.push(partido);
            }
        }
        this.fixture.push(fecha);
        // Add derby match after the current team has already played with all other teams
    }
}

}