import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http: HttpClient) { }

 

  getMovies(id: string){
    return this.http.get(environment.API_URL+'discover/movie?with_genres='+ id).pipe(
      map ((resp : any)=>{
        return {
          movies: resp.results
        }
      })
    )
  }


  getMoviesPopular(){
    return this.http.get(environment.API_URL+ 'trending/movie/day').pipe(
      map ((resp : any)=>{
        console.log('populares', resp)
        return {
          movies: resp.results
        }
      })
    )
  }



  getImagenMovie(url: string ){
    return "https://image.tmdb.org/t/p/original"+url
  }

  getCategory(){
    return this.http.get(environment.API_URL+ "/genre/movie/list").pipe(
      map ((resp : any)=>{
        return {
          movies: resp.genres
        }
      })
    )
  }


// El agregar a localstore debe hacerse desde el servicio

addMovie(id: string, key: string){
  let myList= JSON.parse(localStorage.getItem(key)?? '[]');
  if (myList.indexOf(id)== -1){ // -1 el elemento no se encuentra,  1 se encuentra
    myList.push(id)
    localStorage.setItem(key, JSON.stringify(myList))
  } 

}

addMovieList(id: any){
  this.addMovie(id, "myList")
}

addMovieListLikes(id: any){
  this.addMovie(id, "myListLikes")
}

removeMovie(id: any , key: string){
  let myList= JSON.parse(localStorage.getItem(key)?? '[]');
 let index = myList.indexOf(id)

  if (index >-1){ // -1 el elemento no se encuentra,  1 se encuentra
    myList.splice(index,1)
    localStorage.setItem(key, JSON.stringify(myList))
  } 

}

removeMovieList(id: any){
  this.removeMovie(id, "myList")
}

removeMovieListLikes(id: any){
  this.removeMovie(id, "myListLikes")
}

checkMovie(id:any, key: string):boolean{
  let myList= JSON.parse(localStorage.getItem(key)?? '[]');
  return (myList.indexOf(id) > -1)

}

checkMovieList(id: any):boolean{
  return this.checkMovie(id, "myList")
}

checkMovieListLikes(id: any): boolean{
  return this.checkMovie(id, "myListLikes")
}



}


