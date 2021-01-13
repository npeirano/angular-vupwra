import { Component } from '@angular/core';

import { products } from '../products';

import { FormBuilder } from '@angular/forms';

import { AdministrarEquiposService } from '../administrar-equipos.service';

import { Equipo } from '../equipo';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  checkoutForm;
  equiposService: AdministrarEquiposService;

  agregarEquipo(equipo) {
    this.equiposService.agregarEquipo(equipo);
    window.alert('Your product has been added to the cart!');
  }



  constructor(
    private formBuilder: FormBuilder, private administrarEquiposService: AdministrarEquiposService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''    });
  }

  generarFixture() {
    if(this.administrarEquiposService.nroEquiposPares()) {

    }  else {
        window.alert('La cantidad de equipos debe ser par para generar el fixture');
  }
    
  }

  onSubmit(instance: Equipo) {
    // Process checkout data here
    this.checkoutForm.reset();
    this.administrarEquiposService.agregarEquipo(instance);

  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/