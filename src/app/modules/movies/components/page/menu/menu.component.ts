import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../../../services/requests.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public categories: any[] = [];

  constructor(public requestsService: RequestsService) { }

  ngOnInit(): void {
    this.getCategorys();
  }


  getCategorys() {
    this.requestsService.getCategory().subscribe({
      next: (resp: any) => {
        this.categories = resp.movies;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

}
