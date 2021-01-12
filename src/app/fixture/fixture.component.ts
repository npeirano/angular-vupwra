import { Component, OnInit } from '@angular/core';
import { AdministrarEquiposService } from '../administrar-equipos.service';
import { Equipo } from '../equipo';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../partido';
import { Router } from '@angular/router';



@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  fecha: String [][];
  comboFechas:string[];
    City: any = ['Fecha 1', 'Fecha 2', 'Fecha 3', 'Fecha 4']
  modelOfSelectedBrandToBindTo: string = '';


  constructor(private administrarEquiposService: AdministrarEquiposService, private route: ActivatedRoute,private router: Router) {

   }


   goPlaces(event) {
     console.log(event.target.value);
  this.router.navigate(['/fixture', '']);
}

 ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('fechaId'));

  // Find the product that correspond with the id provided in route.
 this.fecha = this.administrarEquiposService.tournament.matches[productIdFromRoute -1];
 this.comboFechas = this.administrarEquiposService.fechas;
 console.log("40 y agua");
}

}