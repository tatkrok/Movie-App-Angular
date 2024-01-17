import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent  {
  
  type = '';
  id = '';
  url = '';
  movies: Object | undefined;
movie: any;
 

constructor(private route : ActivatedRoute, private http: HttpClient) { } 


ngOnInit() : void {
this.type = this.route.snapshot.params['type'];
this.id = this.route.snapshot.params['id'];
if (this.type === 'trending') {
  this.url = 'http://localhost:4200/assets/data/trending-movies.json';
}
if (this.type === 'theatre') {
  this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
}
if (this.type === 'popular') {
    this.url = 'http://localhost:4200/assets/data/popular-movies.json';
}
    this.getMovie();
}

getMovie() {
this.http.get(this.url).subscribe((movies) => {
  this.movies = movies;
  })
}
}






