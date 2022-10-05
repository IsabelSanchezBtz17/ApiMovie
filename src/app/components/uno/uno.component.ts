import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestsTvService } from 'src/app/services/requests-tv.service';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

 
  public name: string='';
  public movies: any={};
  public moviesPopular: any={};
  public description: string='';
  public name1: string='';
  public movies1: any={};
  public description1: string='';
constructor( private requestsService: RequestsTvService, public dialog: MatDialog){}

ngOnInit(): void {
  this.popular();
  this.findProgram();
}

findProgram( ){
  
    this.requestsService.getMovies("5").subscribe({
      next: (resp: any )=>{
      this.name=resp.name;
      this.movies=resp.movies;
      this.description= resp.description;
      },
      error: (error: any)=>{
        console.log(error);
      }
    });

    this.requestsService.getMovies("8").subscribe({
      next: (resp: any )=>{
      this.name1=resp.name;
      this.movies1=resp.movies;
      this.description1= resp.description;
      },
      error: (error: any)=>{
        console.log(error);
      }
    });



   }


   popular(){
   this.requestsService.getMoviesPopulares().subscribe({
      next: (resp: any )=>{
        this.moviesPopular= resp.movies;
      },
      error: (error: any)=>{
        console.log(error);
      }
    });
   }




   openDialog(movie: any): void {
console.log(movie)
 this.dialog.open(InformationDialogComponent, {
  height: '600px',
      width: '600px',
      data: {name: movie.original_title,
         linkImagen: movie.poster_path,
        descripcion: movie.overview,
        id: movie.id
     
      },
    });

   
  }




}

