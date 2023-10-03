import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListeFilmsComponent } from './lister-films/liste-films.component';

const routes: Routes = [{ path: '', component: AdminComponent, 
children: [
  {path: 'ajouter-film', component: AjouterFilmComponent },
  {path: 'liste-films', component:ListeFilmsComponent },
  ] ,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
