import { Component, OnInit } from '@angular/core';
import { AdministrarEquiposService } from '../administrar-equipos.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  torneoCreado: boolean ;


  constructor(private administrarEquiposService: AdministrarEquiposService) { 

    this.administrarEquiposService.tournamentChange.subscribe((value) => { 
      this.torneoCreado = this.administrarEquiposService.tournament != null; 
    });
  }

  ngOnInit() {
  }
  generarFixture(){
    this.administrarEquiposService.createMatches();

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/