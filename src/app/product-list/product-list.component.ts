import { Component } from '@angular/core';

import { products } from '../products';

import { FormBuilder } from '@angular/forms';

import { AdministrarEquiposService } from '../administrar-equipos.service';



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
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ''    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/