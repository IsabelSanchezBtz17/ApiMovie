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

 }

 addLike(){

 }

}
