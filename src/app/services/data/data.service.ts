import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from 'src/app/class/cours';
import { Entity } from 'src/app/interfaces/entity';
const  BaseUrl = 'http://localhost:3000/';
const   UrlCours = 'Cours';
const  UrlProf='Profs';
const  UrlPhoto='Photos'

@Injectable({
  providedIn: 'root',
})
export class DataService<target extends Entity<Object>> {
  private URL
  constructor(private http: HttpClient,) {
  }

  setUrl(string:String){
    this.URL =BaseUrl+string;
    console.log(this.URL);
    
  }
  get(): Observable<target[]> {
    return this.http.get<target[]>(this.URL);
  }
  getOne(target:target): Observable<target[]> {
    return this.http.get<target[]>(this.URL+`/${target.id||0}`);
  }
  post(target: target): Observable<target> {
    console.log(this.URL);
    console.log(target);
    
    return this.http.post<target>(this.URL,target);
  }
  delete(target: target): Observable<target> {
    return this.http.delete<target>(this.URL+`/${target.id||0}`);
  }
  put(target: target): Observable<target> {
    return this.http.put<target>(this.URL+`/${target.id||0}`,target);
  }
}
