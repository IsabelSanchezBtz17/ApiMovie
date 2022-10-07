import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public requestServices: RequestsService) { }




 addMovie(){
    if(this.requestServices.checkMovieList(this.data.id)){
      this.requestServices.removeMovieList(this.data.id)
    } else {
      this.requestServices.addMovieList(this.data.id)
    }
 }

 addLike(){
  if(this.requestServices.checkMovieListLikes(this.data.id)){
    this.requestServices.removeMovieListLikes(this.data.id)
  } else {
    this.requestServices.addMovieListLikes(this.data.id)
  }
 }

}
