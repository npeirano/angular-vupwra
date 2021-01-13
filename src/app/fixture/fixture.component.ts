import { Component, OnInit } from '@angular/core';
import { AdministrarEquiposService } from '../administrar-equipos.service';
import { Equipo } from '../equipo';
import { ActivatedRoute } from '@angular/router';
import { Partido } from '../partido';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';




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
  selectForm: FormGroup;



  constructor(private administrarEquiposService: AdministrarEquiposService, private route: ActivatedRoute,private router: Router,private fb: FormBuilder) {

   }

  /*
   goPlaces(target: string) {
    let splitValorComboFecha = target.split(":");
    this.router.navigate(['/fixture', '{ queryParams: { fechaId: (Number(splitValorComboFecha[0]) + 1) + "" }']);
    //this.router.navigateByUrl('/fixture/' + (Number(splitValorComboFecha[0]) + 1) + "");
}*/

goPlaces(target: string) {
    let splitValorComboFecha = target.split(":");
    //this.router.navigateByUrl('/fixture/' + (Number(splitValorComboFecha[0]) + 1) + "");
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
   this.router.navigate(['/fixture', Number(splitValorComboFecha[0]) + 1 ]));
}



 ngOnInit() {
  // First get the product id from the current route.
  

  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('fechaId'));
  
  

  // Find the product that correspond with the id provided in route.
 this.fecha = this.administrarEquiposService.tournament.matches[productIdFromRoute -1];
 this.comboFechas = this.administrarEquiposService.fechas;
 this.selectForm = this.fb.group({
   fechaControl: [this.comboFechas[productIdFromRoute]]
 });
 console.log("40 y agua");
}

}