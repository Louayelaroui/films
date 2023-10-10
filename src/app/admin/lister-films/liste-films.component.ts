import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {
  tabFilms: Film[] = [];
  constructor(private filmService:FilmsService) {

   }

  ngOnInit(): void {
    this.tabFilms=this.filmService.getFilms();
  }
  supprimer(id:number){
    this.filmService.delete(id);
  }

}
