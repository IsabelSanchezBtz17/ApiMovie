import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { RequestsService } from '../../../../../services/requests.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies: any = [];

  constructor(public requestsService: RequestsService, public activeRouter: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.activeRouter.params.subscribe(params => {
      if (JSON.stringify(params) == '{}') {
        this.getPopular();
      } else {
        this.getMovies(params['id'])
      }
    })

  }

  getMovies(id: string) {
    this.requestsService.getMovies(id).subscribe({
      next: (resp: any) => {
        this.movies = resp.movies;
        console.log(this.movies)
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getPopular() {
    this.requestsService.getMoviesPopular().subscribe({
      next: (resp: any) => {
        this.movies = resp.movies;
        console.log(this.movies)
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }



  openDetailDialog(movie: any){
    this.dialog.open(DetailDialogComponent, {
      height: '600px',
          width: '600px',
          data: movie
        });
  }


}


