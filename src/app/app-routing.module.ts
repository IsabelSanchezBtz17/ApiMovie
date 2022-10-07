import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesModule } from './modules/movies/movies.module';

const routes: Routes = [
{
  path :'movie',
  loadChildren:() => import('./modules/movies/movies.module').then(m => MoviesModule)
 
},
{
  path :'',
  redirectTo: 'movie',
  pathMatch:'full'
},
{
  path:'**',
  redirectTo: 'movie',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
