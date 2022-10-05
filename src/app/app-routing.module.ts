import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DosComponent } from './components/dos/dos.component';
import { UnoComponent } from './components/uno/uno.component';

const routes: Routes = [
{
  path :'terror',
  component:  DosComponent,
 
},
{
  path :'ficcion',
  component: DosComponent
},
{
  path :'comedia',
  component: DosComponent
},
{
  path:'**',
  component: UnoComponent,

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
