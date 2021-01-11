import { Component, OnInit } from '@angular/core';
import { AdministrarEquiposService } from '../../administrar-equipos.service';
import { Equipo } from '../../equipo';



@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})
export class ListaEquiposComponent implements OnInit {

      equipos = new Array<Equipo>();


  constructor(private administrarEquiposService: AdministrarEquiposService
) { 
    this.equipos = administrarEquiposService.equipos;
  }

  ngOnInit() {
  }

}