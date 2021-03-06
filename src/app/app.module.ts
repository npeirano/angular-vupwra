import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdministrarEquiposService } from './administrar-equipos.service';
import { ListaEquiposComponent } from './product-list/lista-equipos/lista-equipos.component';
import { FixtureComponent } from './fixture/fixture.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'fixture/:fechaId', component: FixtureComponent,pathMatch: 'full' },

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ListaEquiposComponent,
    FixtureComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [AdministrarEquiposService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/