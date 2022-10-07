import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HomeComponent } from './components/page/home/home.component';
import { MenuComponent } from './components/page/menu/menu.component';
import { MoviesComponent } from './components/page/movies/movies.component';
import { DetailDialogComponent } from './components/page/detail-dialog/detail-dialog.component';
import { MaterialModule } from 'src/app/components/shared/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MoviesComponent,
    DetailDialogComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
