import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListeFilmsComponent } from './lister-films/liste-films.component';


@NgModule({
  declarations: [
    AdminComponent,
    AjouterFilmComponent,
    ListeFilmsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
