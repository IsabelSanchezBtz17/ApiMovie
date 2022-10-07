

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
}


