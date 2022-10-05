import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UnoComponent } from '../uno/uno.component';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss']
})

export class InformationDialogComponent {

  flag: boolean = false;
  icon: string = 'thumbs_up';
  seleccion: any = {

  }

  constructor(
    public dialogRef: MatDialogRef<UnoComponent>,
    @Inject(MAT_DIALOG_DATA)

    public data: {
      name: string,
      linkImagen: string,
      descripcion: string,
      id: number
    }

  ) { }


  onNoClick(): void {
    this.dialogRef.close();
  }


  getMovies(): number[] {
    if (localStorage.getItem("movies") == null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("movies") ?? "")
  }

  getLikes(): number[] {
    if (localStorage.getItem("likes") == null) {
      return [];
    }
    return JSON.parse(localStorage.getItem("likes") ?? "")
  }

  add(id: number): void {
    let movies;
    if (this.findList(id)== false) {
      this.icon = 'done'

      if (localStorage.getItem("movies") == null) {
        // no existen ninguna pelicula en la lista
        movies = [];
      } else {
        movies = JSON.parse(localStorage.getItem("movies") ?? "")
      }
      if (this.getMovies().indexOf(id) >= 0) return;

      movies.push(id)
      localStorage.setItem("movies", JSON.stringify(movies))
      
    } else{
    
      console.log('ya estaba agregada ahora se elimina')
      movies = JSON.parse(localStorage.getItem("movies") ?? "")
      movies.pop(id)
      localStorage.setItem("movies", JSON.stringify(movies))
      
    }

  }

  votar(id: number): void {
    let movies;
    if (this.findListLike(id)== false) {
      this.icon = 'done'
      if (localStorage.getItem("likes") == null) {
        // no existen ninguna pelicula en la lista
        movies = [];
      } else {
        movies = JSON.parse(localStorage.getItem("likes") ?? "")
      }
      if (this.getMovies().indexOf(id) >= 0) return;

      movies.push(id)
      localStorage.setItem("likes", JSON.stringify(movies))
    
    } else{
    
      movies = JSON.parse(localStorage.getItem("movies") ?? "")
      movies.pop(id)
      localStorage.setItem("likes", JSON.stringify(movies))
      
    }

  }

  iconS(id: any): string {
 
    if(this.findList(id)== true){
      return 'done'
    } 
    else{
      return 'add'
    }
    }

    iconL(id: any): string {
 
      if(this.findListLike(id)== true){
        return 'thumb_down'
      } 
      else{
        return 'thumb_up'
      }
      }

  findList(id: any): boolean{
    let listMovies = this.getMovies();
    for (let index = 0; index < listMovies.length; index++) {
      if (listMovies[index] == id) {
        return true
      }
  }
  
  return false;

}

findListLike(id: any): boolean{
  let listMovies = this.getLikes();
  for (let index = 0; index < listMovies.length; index++) {
    if (listMovies[index] == id) {
      return true
    }
}

return false;

}

}