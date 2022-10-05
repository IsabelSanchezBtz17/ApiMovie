

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { _isTestEnvironment } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class RequestsTvService {

  constructor(public http: HttpClient) { }



  getMovies(id: string){
    return this.http.get('https://api.themoviedb.org/3/list/'+ id).pipe(
      map ((resp : any)=>{
        return {
          name: resp.name,
          movies: resp.items

        }
      })
    )
  }

  getMoviesPopulares(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular').pipe(
      map ((resp : any)=>{
        console.log('populares', resp)
        return {
          movies: resp.results
        
        }
      })
    )
  }

  
}


