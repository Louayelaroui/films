import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent implements OnInit {
  tabFilms: Film[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  ajouterFilm(){

  }

}
